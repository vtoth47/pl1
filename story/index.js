let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.782, lng: -85.909 },
    zoom: 8,
  });
}
