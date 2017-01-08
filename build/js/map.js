var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 59.938950, lng: 30.323051},
    zoom: 15,
    disableDefaultUI: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
  });

  var image = "img/icon-map-pin.svg";

  var mapMarker = new google.maps.Marker({
    position: {lat: 59.938950, lng: 30.323051},
    map: map,
    icon: image
  });
}
