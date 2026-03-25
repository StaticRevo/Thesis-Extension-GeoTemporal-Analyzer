// static/js/map.js

let map;
let sentinelLayer = null;

// Generate dates every 3 months from 2015–2025
function generateDates() {
    const dates = [];
    for (let year = 2015; year <= 2025; year++) {
        for (let month of [1, 4, 7, 10]) {
            dates.push(`${year}-${month.toString().padStart(2, '0')}-15`);
        }
    }
    return dates;
}

const dates = generateDates();

function initMap() {
    map = L.map('map').setView([40.7128, -74.0060], 10);

    const googleSat = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20, subdomains: ['mt0','mt1','mt2','mt3'], attribution: '© Google'
    });

    const googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20, subdomains: ['mt0','mt1','mt2','mt3'], attribution: '© Google'
    });

    const googleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20, subdomains: ['mt0','mt1','mt2','mt3'], attribution: '© Google'
    });

    googleSat.addTo(map);

    L.control.layers({
        "Google Satellite": googleSat,
        "Google Hybrid": googleHybrid,
        "Google Streets": googleStreets
    }).addTo(map);
}

function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

function loadSentinelImage(date) {
    showLoading();
    document.getElementById('loadingStatus').textContent = `Fetching image for ${date}...`;

    // Fixed location for now (New York area)
    const lat = 40.7128;
    const lon = -74.0060;

    fetch(`/get_image?lat=${lat}&lon=${lon}&date=${date}`)
        .then(res => res.json())
        .then(data => {
            if (sentinelLayer) {
                map.removeLayer(sentinelLayer);
            }

            if (!data.tile_url) {
                console.log(`No image available for ${date}`);
                document.getElementById('loadingStatus').textContent = "No image found for this date";
                setTimeout(hideLoading, 1500);
                return;
            }

            sentinelLayer = L.tileLayer(data.tile_url, {
                maxZoom: 18,
                opacity: 0.9,
                attribution: 'Sentinel-2 via Google Earth Engine'
            }).addTo(map);

            // Hide loading once the layer is added
            document.getElementById('loadingStatus').textContent = "Loading tiles...";
            
            // Wait a bit for tiles to start loading, then hide
            setTimeout(hideLoading, 1200);
            console.log(`✅ Sentinel-2 layer added for ${date}`);
        })
        .catch(err => {
            console.error("Fetch error:", err);
            document.getElementById('loadingStatus').textContent = "Error loading image";
            setTimeout(hideLoading, 2000);
        });
}

// Create date bar
function createDateBar() {
    const dateBar = document.getElementById('dateBar');
    dateBar.innerHTML = '';

    dates.forEach((date, index) => {
        const btn = document.createElement('button');
        btn.textContent = date;
        btn.className = 'btn btn-outline-light btn-sm me-2 mb-2';

        if (index === dates.length - 1) {
            btn.classList.add('active', 'btn-primary');
        }

        btn.addEventListener('click', () => {
            document.querySelectorAll('#dateBar button').forEach(b => {
                b.classList.remove('active', 'btn-primary');
            });
            btn.classList.add('active', 'btn-primary');

            loadSentinelImage(date);
        });

        dateBar.appendChild(btn);
    });
}

// Start the app
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    createDateBar();

    setTimeout(() => {
        const latestDate = dates[dates.length - 1];
        loadSentinelImage(latestDate);
    }, 800);
});