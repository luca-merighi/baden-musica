const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-22.9384962,-47.0646947], 16)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map)

const icon = L.icon({
    iconUrl: '../img/icons/map-pin.png',
    iconSize: [40, 40],
    iconAnchor: [21, 15],
    popupAnchor: [0, 0]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent("Baden Powell Nº418-B")

L.marker([-22.9378202,-47.0646947], {icon})
    .addTo(map)
    .bindPopup(popup)