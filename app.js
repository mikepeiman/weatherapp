// initialize Weather object
const weather = new Weather(41.2827291, -123.12073750000002) 
// const ui = new UI()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// change location event
document.querySelector('#submit').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value
  const country = document.getElementById('country').value

  // weather.changeLocation(city, state, country)
  // getWeather()
  $('#locationModal').modal('hide')
})

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results)
  })
  .catch(err => console.log(err))
}

