from flask import Blueprint, request, jsonify
from services.gee_service import get_image_tile

# Initialize blueprint
imagery_bp = Blueprint("imagery", __name__)

@imagery_bp.route("/image", methods=["GET"])
def get_image():
    lat = request.args.get("lat")
    lon = request.args.get("lon")
    date = request.args.get("date")

    tile_url = get_image_tile(lat, lon, date)
    return jsonify({"tile_url": tile_url})