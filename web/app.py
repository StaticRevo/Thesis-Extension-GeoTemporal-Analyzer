import os
from flask import Flask, render_template, request, jsonify
import ee
from geo_helper import get_tile_url

app = Flask(__name__)
ee.Initialize(project='geo-time-viewer')

@app.route("/")
def index():
    return render_template("index.html")

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

    return jsonify(result)  # now returns {tile_url, actual_date}

if __name__ == "__main__":
    app.run(debug=True)