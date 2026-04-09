import os
import random
from flask import Flask, render_template, request, jsonify
import ee
from geo_helper import get_tile_url

app = Flask(__name__)
app.secret_key = 'geotemporal_secret'
ee.Initialize(project='geo-time-viewer')

tile_cache = {}
snapshots = [] 

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/categories")
def categories():
    return render_template("categories.html")

@app.route('/snapshots')
def snapshots():
    return render_template('snapshots.html')

@app.route("/get_image", methods=["GET"])
def get_image():
    lat = request.args.get("lat", "40.7128")
    lon = request.args.get("lon", "-74.0060")
    date = request.args.get("date")
    bbox = request.args.get("bbox") 

    if not date:
        return jsonify({"error": "date parameter required"}), 400

    result = get_tile_url(lat, lon, date, bbox)

    if result is None:
        return jsonify({"tile_url": None, "actual_date": None})

    return jsonify(result)

@app.route('/api/category-images')
def category_images():
    base = os.path.join(app.static_folder, 'images')
    result = {}
    exts = {'.jpg', '.jpeg', '.png', '.webp', '.gif'}

    for folder in os.listdir(base):
        folder_path = os.path.join(base, folder)
        if not os.path.isdir(folder_path):
            continue

        all_imgs = [
            f for f in os.listdir(folder_path)
            if os.path.splitext(f)[1].lower() in exts
        ]

        satellite = [f for f in all_imgs if 'satellite' in f.lower()]
        others    = [f for f in all_imgs if 'satellite' not in f.lower()]

        img1 = satellite[0] if satellite else None
        img2 = random.choice(others) if others else None
        rest = [f for f in others if f != img2]

        def make_url(filename, folder=folder):
            return f"/static/images/{folder}/{filename}"

        def make_label(filename):
            return filename.rsplit('.', 1)[0].replace('-', ' ')

        result[folder] = {
            'img1':   {'src': make_url(img1), 'label': make_label(img1)} if img1 else None,
            'img2':   {'src': make_url(img2), 'label': make_label(img2)} if img2 else None,
            'photos': [{'src': make_url(f), 'label': make_label(f)} for f in rest],
        }

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)