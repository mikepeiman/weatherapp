// initialize Weather object
const weather = new Weather(41.2827291, -123.12073750000002) 
const ui = new UI()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value
  const country = document.getElementById('country').value

  weather.changeLocation(city, state, country)
})

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results)
    console.log('getWeather results promise from app.js')
    ui.paint(results)
  })
  .catch(err => console.log(err))
}

