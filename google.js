function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function(e) {
    geocodeAddress(geocoder, map);
    e.preventDefault()
  });
}

function geocodeAddress(geocoder, resultsMap) {
  let city = document.getElementById('city').value
  let state = document.getElementById('state').value
  let country = document.getElementById('country').value
  var address = city + ',' + state +',' + country
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

/*
// Google Maps Platform API key AIzaSyDNmdL0UoyvDYAhB7l5UF7L_1_Y5lcIBCI

{
 address: string,
 location: LatLng,
 placeId: string,
 bounds: LatLngBounds,
 componentRestrictions: GeocoderComponentRestrictions,
 region: string
}

Test URL: https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDNmdL0UoyvDYAhB7l5UF7L_1_Y5lcIBCI

fetch('https://maps.googleapis.com/maps/api/geocode/json?address=4346+Barker+Ave,+Burnaby,+BC,+Canada&key=AIzaSyDNmdL0UoyvDYAhB7l5UF7L_1_Y5lcIBCI')
.then(res => res.json())
.then(data => {console.log(data)})
*/