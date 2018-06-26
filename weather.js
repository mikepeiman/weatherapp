// utilizing DarkSky weather API, as Weather Underground no longer provides free API access
// https://darksky.net/dev/docs

class Weather {
  constructor(lat, lng) {
    this.apiKey = '8fcc777cf23420861993877a39a0489c'
    this.lat = lat
    this.lng = lng
  }

// Fetch weather from API
// const GMAPI = new google.maps.Geocoder

  async getWeather() {
    console.log('weather.js, fetching result via JSONP...')
    const response = await fetchJsonp(`https://api.darksky.net/forecast/${this.apiKey}/${this.lat},${this.lng}?units=ca`)
    const responseData = await response.json()
    // console.log('weather.js, after darkSky call...')
    // console.log(`Lat: ${this.lat}, Lng: ${this.lng}`)
    console.log(responseData)
    console.log('getWeather results promise from weather.js')
    ui.paint(responseData)
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let country = document.getElementById('country').value
    let UILat = document.getElementById('lat')
    let UILng = document.getElementById('lng')
    // let fixedLat = (this.lat).toFixed(5)
    // let fixedLng = (this.lng).toFixed(5)
    UILat.value = `Latitude: ${this.lat}`
    UILng.value = `Longitude: ${this.lng}`
    if(city === '') {
      city = 'Vancouver'
      state = 'BC'
      country = 'Canada'
    }
    var address = city + ', ' + state +', ' + country
    document.getElementById('w-location').textContent = address
    return responseData
  }

  changeLocation(lat, lng) {
    this.lat = lat
    this.lng = lng
  }

  }

// console.log(`From weather.js, Lat: ${results[0].geometry.location.lat()}`)

// fetchJsonp('https://api.darksky.net/forecast/8fcc777cf23420861993877a39a0489c/49.2827291,-123.12073750000002')
// .then(res => res.json())
// .then(json => {
//   console.log(json)
// console.log('returned hardcoded darkSky json (weather.js)')
// })

