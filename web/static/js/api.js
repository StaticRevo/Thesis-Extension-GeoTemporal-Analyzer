// Function to fetch image tile URL from the backend API
async function fetchImage(lat, lon, date) {
    const response = await fetch(
        `http://127.0.0.1:5000/image?lat=${lat}&lon=${lon}&date=${date}`
    );
    const data = await response.json();
    return data.tile_url;
}