# Standard imports
import os
from flask import Flask, render_template, request, jsonify # Flask imports
import ee # Earth Engine
from geo_helper import get_tile_url # Local helpers

# --- App Setup ---
app = Flask(__name__)
ee.Initialize(project='geo-time-viewer') # Initialize Earth Engine

# --- Routes ---
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/get_image", methods=["GET"])
def get_image():
    lat = request.args.get("lat")
    lon = request.args.get("lon")
    date = request.args.get("date")

    tile_url = get_tile_url(lat, lon, date)

    return jsonify({"tile_url": tile_url})

# --- Run ---
if __name__ == "__main__":
    app.run(debug=True)