from flask import Flask
from flask_cors import CORS
from flask import Blueprint, request, jsonify
from web_helper import get_image_tile



imagery_bp = Blueprint("imagery", __name__, url_prefix="/api")

@imagery_bp.route("/image", methods=["GET"])
def get_image():
    lat = request.args.get("lat")
    lon = request.args.get("lon")
    date = request.args.get("date")

    tile_url = get_image_tile(lat, lon, date)
    return jsonify({"tile_url": tile_url})

# Initialize Flask app and enable CORS
app = Flask(__name__) 
CORS(app)

# Register blueprints
app.register_blueprint(imagery_bp)


@app.route("/", methods=["GET"])
def home():
    return {
        "message": "GeoTemporal Analyzer API is running",
        "endpoints": ["/api/image?lat=<value>&lon=<value>&date=<YYYY-MM-DD>"],
    }

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)