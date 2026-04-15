let map;
let sentinelLayer = null;
let playInterval = null;
let isPlaying = false;
let currentDate = null;
let currentFetch = null;  // ← was missing, caused crash on button click

function generateDates() {
    const dates = [];
    for (let year = 2015; year <= 2025; year++) {
        for (let month of [1, 4, 7, 10]) {
            dates.push(`${year}-${String(month).padStart(2, '0')}-01`);
        }
    }
    return dates;
}

const dates = generateDates();

function initMap() {
    map = L.map('map', { zoomControl: true }).setView([40.7128, -74.0060], 10);

    const googleSat = L.tileLayer(
        'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        { maxZoom: 20, subdomains: ['mt0','mt1','mt2','mt3'], attribution: '© Google' }
    );
    const googleHybrid = L.tileLayer(
        'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        { maxZoom: 20, subdomains: ['mt0','mt1','mt2','mt3'], attribution: '© Google' }
    );
    const googleStreets = L.tileLayer(
        'https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        { maxZoom: 20, subdomains: ['mt0','mt1','mt2','mt3'], attribution: '© Google' }
    );

    googleSat.addTo(map);
    L.control.layers({
        "Satellite": googleSat,
        "Hybrid": googleHybrid,
        "Streets": googleStreets
    }).addTo(map);

    updatePreviewRect();
    map.on('move', updatePreviewRect);
    map.on('zoom', updatePreviewRect);

    //map.on('zoomend', updateSentinelOpacity);
    map.on('zoomend', updateZoomIndicator);
    updateZoomIndicator();

    document.getElementById('confirmBtn').addEventListener('click', () => {
        // ← fallback to latest date if slider hasn't been touched yet
        if (!currentDate) {
            currentDate = dates[dates.length - 1];
            document.getElementById('timelineSlider').value = dates.length - 1;
            document.getElementById('displayDate').textContent = currentDate;
        }
        const center = map.getCenter();
        loadSentinelImage(currentDate, center.lat, center.lng);
    });
}

function updatePreviewRect() {
    const mapEl = document.getElementById('map');
    const rect  = document.getElementById('previewRect');
    const btn   = document.getElementById('confirmBtn');

    const mw = mapEl.offsetWidth;
    const mh = mapEl.offsetHeight;

    const bw = Math.round(mw * 0.6);
    const bh = Math.round(mh * 0.6);
    const bx = Math.round((mw - bw) / 2);
    const by = Math.round((mh - bh) / 2);

    rect.style.left   = bx + 'px';
    rect.style.top    = by + 'px';
    rect.style.width  = bw + 'px';
    rect.style.height = bh + 'px';

    btn.style.left = (bx + bw / 2) + 'px';
    btn.style.top  = (by + bh + 10) + 'px';
}

function showLoading(msg = 'Fetching imagery…') {
    document.getElementById('loadingOverlay').style.display = 'flex';
    document.getElementById('loadingStatus').textContent = msg;
    document.getElementById('noImageNotice').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

function updateSentinelOpacity() {
    if (!sentinelLayer) return;
    const z = map.getZoom();
    if (z <= 13)       sentinelLayer.setOpacity(0.85);
    else if (z === 14) sentinelLayer.setOpacity(0.6);
    else if (z === 15) sentinelLayer.setOpacity(0.35);
    else               sentinelLayer.setOpacity(0.15);
}

function loadSentinelImage(date, lat = null, lon = null) {
    currentDate = date;

    if (currentFetch) {
        currentFetch.abort();
        currentFetch = null;
    }

    if (lat === null || lon === null) {
        const center = map.getCenter();
        lat = center.lat;
        lon = center.lng;
    }

    const mapEl = document.getElementById('map');
    const mw = mapEl.offsetWidth;
    const mh = mapEl.offsetHeight;
    const bw = Math.round(mw * 0.6);
    const bh = Math.round(mh * 0.6);
    const bx = Math.round((mw - bw) / 2);
    const by = Math.round((mh - bh) / 2);

    const sw = map.containerPointToLatLng([bx,      by + bh]);
    const ne = map.containerPointToLatLng([bx + bw, by     ]);

    const controller = new AbortController();
    currentFetch = controller;

    showLoading(`Fetching ${date}…`);
    document.getElementById('displayDate').textContent = date;
    document.getElementById('actualDateNote').textContent = '';
    document.getElementById('noImageNotice').style.display = 'none';
    document.getElementById('previewRect').classList.add('loading');

    fetch(`/get_temporal_image?lat=${lat}&lon=${lon}&date=${date}&bbox=${sw.lng},${sw.lat},${ne.lng},${ne.lat}`,
          { signal: controller.signal })
        .then(r => r.json())
        .then(data => {
            currentFetch = null;
            document.getElementById('previewRect').classList.remove('loading');

            if (sentinelLayer) {
                sentinelLayer.off();
                map.removeLayer(sentinelLayer);
                sentinelLayer = null;
            }

            if (!data.tile_url) { 
                document.getElementById('noImageNotice').style.display = 'block';
                hideLoading();
                return;
            }

            if (data.actual_date && data.actual_date !== date) {
                document.getElementById('actualDateNote').textContent =
                    `(nearest: ${data.actual_date})`;
            }

            sentinelLayer = L.tileLayer(data.tile_url, {
                minZoom: 3,
                maxNativeZoom: 18,
                maxZoom: 18,
                opacity: 0.9,
                tileSize: 256,
                //bounds: L.latLngBounds(sw, ne),
                attribution: 'Sentinel-2 · Google Earth Engine',
                crossOrigin: true,
                updateWhenIdle: false,
                keepBuffer: 2,
            }).addTo(map);
            
            //updateSentinelOpacity();

            let loadFired = false;
            const onLoad = () => {
                if (!loadFired) { loadFired = true; hideLoading(); }
            };
            sentinelLayer.on('load', onLoad);
            sentinelLayer.on('tileerror', onLoad);
            setTimeout(onLoad, 10000);
        })
        .catch(err => {
            if (err.name === 'AbortError') return;
            document.getElementById('previewRect').classList.remove('loading');
            console.error('[MAP] Fetch error:', err);
            hideLoading();
        });
}

function buildTimeline() {
    const slider = document.getElementById('timelineSlider');
    slider.max = dates.length - 1;
    slider.value = dates.length - 1;

    const labelsEl = document.getElementById('yearLabels');
    const ticksEl  = document.getElementById('timelineTicks');
    const years = [...new Set(dates.map(d => d.slice(0, 4)))];

    years.forEach(year => {
        const firstIdx = dates.findIndex(d => d.startsWith(year));
        const pct = (firstIdx / (dates.length - 1)) * 100;
        const lbl = document.createElement('span');
        lbl.textContent = year;
        lbl.style.left = `${pct}%`;
        labelsEl.appendChild(lbl);
    });

    dates.forEach((_, i) => {
        const tick = document.createElement('span');
        tick.style.left = `${(i / (dates.length - 1)) * 100}%`;
        ticksEl.appendChild(tick);
    });

    let debounceTimer;
    slider.addEventListener('input', () => {
        const date = dates[parseInt(slider.value)];
        currentDate = date;  // ← keep currentDate in sync with slider
        document.getElementById('displayDate').textContent = date;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => loadSentinelImage(date), 400);
    });
}

function togglePlay() {
    const btn = document.getElementById('playBtn');
    if (isPlaying) {
        clearInterval(playInterval);
        isPlaying = false;
        btn.textContent = '▶';
    } else {
        isPlaying = true;
        btn.textContent = '⏸';
        const speed = parseInt(document.getElementById('speedSelect').value);
        playInterval = setInterval(() => {
            const slider = document.getElementById('timelineSlider');
            let next = parseInt(slider.value) + 1;
            if (next >= dates.length) next = 0;
            slider.value = next;
            loadSentinelImage(dates[next]);
        }, speed);
    }
}

function updateZoomIndicator() {
    const z = map.getZoom();
    document.getElementById('zoomLevel').textContent = `Z${z}`;

    let label, color;
    if (z <= 8)       { label = 'Continental';         color = '#8b949e'; }
    else if (z <= 10) { label = 'Country view';        color = '#8b949e'; }
    else if (z === 11){ label = 'Regional view';       color = '#58a6ff'; }
    else if (z === 12){ label = 'City view';           color = '#58a6ff'; }
    else if (z === 13){ label = '✓ Best for Sentinel'; color = '#3fb950'; }
    else if (z === 14){ label = '✓ Sentinel native';   color = '#3fb950'; }
    else if (z === 15){ label = '⚠ Approaching limit'; color = '#d29922'; }
    else if (z === 16){ label = '⚠ Past Sentinel res'; color = '#f0883e'; }
    else              { label = '✕ Too zoomed in';     color = '#f85149'; }

    const labelEl = document.getElementById('zoomLabel');
    const levelEl = document.getElementById('zoomLevel');
    labelEl.textContent = label;
    labelEl.style.color = color;
    levelEl.style.color = color;
}

document.getElementById('playBtn')?.addEventListener('click', togglePlay);

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    buildTimeline();

    currentDate = dates[dates.length - 1];
    document.getElementById('displayDate').textContent = currentDate;

    document.getElementById('opacitySlider').addEventListener('input', (e) => {
        if (sentinelLayer) sentinelLayer.setOpacity(parseFloat(e.target.value));
    });
});