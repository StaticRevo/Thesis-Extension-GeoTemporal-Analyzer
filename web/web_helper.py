import ee

ee.Initialize(project='geo-time-viewer')

def get_image_tile(lat, lon, date):
    point = ee.Geometry.Point([float(lon), float(lat)])

    collection = (
        ee.ImageCollection('COPERNICUS/S2')
        .filterBounds(point)
        .filterDate(date, date)
        .sort('CLOUDY_PIXEL_PERCENTAGE')
    )

    image = collection.first()

    vis_params = {
        'bands': ['B4', 'B3', 'B2'],
        'min': 0,
        'max': 3000,
    }

    map_id = image.getMapId(vis_params)

    return map_id['tile_fetcher'].url_format