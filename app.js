// initialize Weather object

const weather = new Weather(41.2827291, -123.12073750000002) 
document.addEventListener('DOMContentLoaded', getWeather)
weather.crossOrigin = true

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results)
    console.log('getWeather results promise from app.js')
  })
  .catch(err => console.log(err))
  // weather.getWeather().then(data => console.log('app.js getWeather result: ' + data))
}

// document.getElementById('submit').addEventListener('click', function(e) {
//   let city = document.getElementById('city').value
//   let state = document.getElementById('state').value
//   let country = document.getElementById('country').value
//   var address = city + ',' + state +',' + country
//   const coords = new Coords(address)
//   coords.getCoords()
//   console.log('coords.getCoords() in app.js')
// })