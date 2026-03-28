// static/js/map.js

let map;
let sentinelLayer = null;
let playInterval = null;
let isPlaying = false;
let currentDate = null;  // ← track current date so moveend can re-fetch

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

    // ── Click to set location ──────────────────────────────
    let clickMarker = null;

    map.on('click', (e) => {
        const { lat, lng } = e.latlng;

        // Move marker or create it
        if (clickMarker) {
            clickMarker.setLatLng([lat, lng]);
        } else {
            clickMarker = L.marker([lat, lng]).addTo(map);
        }

        // Fetch imagery for clicked point
        if (currentDate) loadSentinelImage(currentDate, lat, lng);
    });
}

function showLoading(msg = 'Fetching imagery…') {
    document.getElementById('loadingOverlay').style.display = 'flex';
    document.getElementById('loadingStatus').textContent = msg;
    document.getElementById('noImageNotice').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}



function loadSentinelImage(date, lat = null, lon = null) {
    currentDate = date;

    // Use passed coords, or map center if none given
    if (lat === null || lon === null) {
        const center = map.getCenter();
        lat = center.lat;
        lon = center.lng;
    }

    lat = parseFloat(lat).toFixed(5);
    lon = parseFloat(lon).toFixed(5);

    console.log(`[MAP] Fetching ${date} at ${lat},${lon}`);
    showLoading(`Fetching ${date}…`);
    document.getElementById('displayDate').textContent = date;
    document.getElementById('actualDateNote').textContent = '';
    document.getElementById('noImageNotice').style.display = 'none';

    fetch(`/get_image?lat=${lat}&lon=${lon}&date=${date}`)
        .then(r => r.json())
        .then(data => {
            console.log('[MAP] Response:', data);

            if (sentinelLayer) {
                sentinelLayer.off();
                map.removeLayer(sentinelLayer);
                sentinelLayer = null;
            }

            if (!data.tile_url) {
                console.warn('[MAP] No tile_url returned');
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
                opacity: 0.85,
                tileSize: 256,
                attribution: 'Sentinel-2 · Google Earth Engine',
                crossOrigin: true,
                updateWhenIdle: false,
                keepBuffer: 2,
            }).addTo(map);

            let loadFired = false;
            const onLoad = () => {
                if (!loadFired) { loadFired = true; hideLoading(); }
            };
            sentinelLayer.on('load', onLoad);
            sentinelLayer.on('tileerror', onLoad);
            setTimeout(onLoad, 10000);
        })
        .catch(err => {
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

document.getElementById('playBtn')?.addEventListener('click', togglePlay);

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    buildTimeline();
    setTimeout(() => loadSentinelImage(dates[dates.length - 1]), 600);
});