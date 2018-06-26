// init storage
const storage = new Storage()
// get stored location data
const weatherLocation = storage.getLocationData()

// initialize Weather object
const weather = new Weather(weatherLocation.lat, weatherLocation.lng) 
// const ui = new UI()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// change location event
document.querySelector('#submit').addEventListener('click', (e) => {
  // const city = document.getElementById('city').value
  // const state = document.getElementById('state').value
  // const country = document.getElementById('country').value
  const UILat = document.getElementById('lat')
  const UILng = document.getElementById('lng')

  // set location in localStorage
  storage.setLocationData(weatherLocation.lat, weatherLocation.lng)
  weather.changeLocation(lat, lng)
  // getWeather()
  $('#locationModal').modal('hide')
})

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results)
    console.log(results)
    console.log('From app.js')
    // storage.setLocationData([{'lat': lat}, {'lng': lng}])
  })
  .catch(err => console.log(err))
}

