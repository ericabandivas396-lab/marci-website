// map.js - Initialize a Leaflet map centered on Marci's office
document.addEventListener('DOMContentLoaded', function () {
    try {
        // Coordinates for 3190 HW-160, Pahrump, NV (approx)
        const lat = 36.2086;
        const lng = -116.0085;

        // Create map
        const map = L.map('map', {
            center: [lat, lng],
            zoom: 13,
            scrollWheelZoom: false,
        });

        // Tile layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Marker and popup
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup('<strong>Marci Metzger - THE RIDGE REALTY GROUP</strong><br>3190 HW-160, Suite F<br>Pahrump, NV').openPopup();

        // Add simple responsiveness: recenter on resize
        window.addEventListener('resize', () => {
            map.invalidateSize();
            map.setView([lat, lng]);
        });
    } catch (err) {
        // If Leaflet is not available or an error occurs, fail silently
        console.error('Map initialization failed:', err);
    }
});
