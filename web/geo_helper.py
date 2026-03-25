import ee

def get_tile_url(lat, lon, date):
    try:
        point = ee.Geometry.Point([float(lon), float(lat)])

        # Use a small date window in case the exact day has no image
        start = date
        end = ee.Date(date).advance(1, 'day')

        collection = (
            ee.ImageCollection('COPERNICUS/S2')
            .filterBounds(point)
            .filterDate(start, end)
            .sort('CLOUDY_PIXEL_PERCENTAGE')
        )

        if collection.size().getInfo() == 0:
            return None

        image = collection.first()

        vis_params = {
            'bands': ['B4', 'B3', 'B2'],
            'min': 0,
            'max': 3000,
            'gamma': 1.4
        }

        map_id = image.getMapId(vis_params)
        return map_id['tile_fetcher'].url_format

    except Exception as e:
        print("Error in get_tile_url:", e)
        return None