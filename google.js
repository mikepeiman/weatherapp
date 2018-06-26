const ui = new UI()

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 49.2827291, lng: -123.12073750000002}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map)
    $('#locationModal').modal('hide')
    
    // const coords = new Coords(address)
    // console.log('coords.getCoords() in google.js')
    // coords.getCoords()
    
  });
}

function geocodeAddress(geocoder, resultsMap) {

  let city = document.getElementById('city').value
  let state = document.getElementById('state').value
  let country = document.getElementById('country').value
  if(city === '') {
    city = 'Vancouver'
    state = 'BC'
    country = 'Canada'
  }
  var address = city + ', ' + state +', ' + country
  document.getElementById('w-location').textContent = address
  console.log(`Address from google.js: ${address}`)
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      // console.log(results[0].geometry.location.lat())
      // console.log(results[0].geometry.location.lng())
      // console.log(results[0].geometry.location)
      resultsMap.setCenter(results[0].geometry.location);
      const weather = new Weather(results[0].geometry.location.lat(), results[0].geometry.location.lng())
      weather.getWeather()
      console.log('getWeather from google.js geocoder.geocode')
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
    // const lat = results[0].geometry.location.lat()
    // const lng = results[0].geometry.location.lng()
    // console.log(lat, lng)
    // console.log('test')
    
  });
}

