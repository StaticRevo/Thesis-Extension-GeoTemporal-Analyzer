import ee

def get_tile_url(lat, lon, date):
    try:
        point = ee.Geometry.Point([float(lon), float(lat)])
        region = point.buffer(50000).bounds()  # bigger region = tiles cover more area

        start = ee.Date(date)
        end = start.advance(60, 'day')

        collection = (
            ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
            .filterBounds(region)
            .filterDate(start, end)
            .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
            .sort('CLOUDY_PIXEL_PERCENTAGE')
            .limit(5)
        )

        if collection.size().getInfo() == 0:
            collection = (
                ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                .filterBounds(region)
                .filterDate(start, end)
                .sort('CLOUDY_PIXEL_PERCENTAGE')
                .limit(3)
            )
            if collection.size().getInfo() == 0:
                return None

        image = collection.mosaic()

        # Percentile stretch over the region
        percentiles = image.select(['B4', 'B3', 'B2']).reduceRegion(
            reducer=ee.Reducer.percentile([2, 98]),
            geometry=region,
            scale=200,
            maxPixels=1e8,
            bestEffort=True
        ).getInfo()

        def p(band, pct):
            val = percentiles.get(f'{band}_p{pct}')
            return val if val is not None else (0 if pct == 2 else 3000)

        # visualize() bakes the stretch into the image then GEE
        # handles zoom-dependent resolution automatically per tile request
        rgb = image.visualize(
            bands=['B4', 'B3', 'B2'],
            min=[p('B4', 2),  p('B3', 2),  p('B2', 2)],
            max=[p('B4', 98), p('B3', 98), p('B2', 98)],
            gamma=1.3
        )

        map_id = ee.data.getMapId({'image': rgb})
        tile_url = map_id['tile_fetcher'].url_format

        actual_date = (
            ee.Date(collection.first().get('system:time_start'))
            .format('YYYY-MM-dd')
            .getInfo()
        )

        return {"tile_url": tile_url, "actual_date": actual_date}

    except Exception as e:
        print(f"Error in get_tile_url: {e}")
        return None