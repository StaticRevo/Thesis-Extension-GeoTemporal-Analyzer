// Get reference to the date picker element
const datePicker = document.getElementById("datePicker");

// Listen for changes in the date picker and update the map layer accordingly
datePicker.addEventListener("change", async () => {
    const date = datePicker.value;
    const lat = 35.95;
    const lon = 14.41;

    const tileUrl = await fetchImage(lat, lon, date);
    updateLayer(tileUrl);
});

// Load initial layer on page load
window.addEventListener("load", async () => {
    const tileUrl = await fetchImage(35.95, 14.41, datePicker.value);
    updateLayer(tileUrl);
});