import ee

ee.Initialize(project='geo-time-viewer')

point = ee.Geometry.Point([14.41, 35.95])  # Malta

image = (
    ee.ImageCollection('COPERNICUS/S2')
    .filterBounds(point)
    .filterDate('2022-01-01', '2022-01-31')
    .sort('CLOUDY_PIXEL_PERCENTAGE')
    .first()
)

print(image.getInfo())