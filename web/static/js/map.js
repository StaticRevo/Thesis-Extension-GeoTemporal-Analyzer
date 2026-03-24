// Initialize the map
const map = L.map('map').setView([35.95, 14.41], 10);
let currentLayer = null;

// Add OpenStreetMap base layer
function updateLayer(tileUrl) {
    if (!tileUrl) {
        alert("No image available for this date.");
        return;
    }

    if (currentLayer) {
        map.removeLayer(currentLayer);
    }

    currentLayer = L.tileLayer(tileUrl, {
        attribution: 'Satellite Data'
    }).addTo(map);
}