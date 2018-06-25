class Coords {
  constructor(city, state, country) {
    this.city = document.getElementById('city').value
    this.state = document.getElementById('state').value
    this.country = document.getElementById('country').value
    this.address = city + ',' + state +',' + country
  }
//   async getCoords() {
//     const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}`)
//     const responseData = await response.json()
    
//     console.log(responseData.results[0].geometry.location)

//     console.log('getCoords responseData')
//   }
// }
async getCoords() {
  let city = document.getElementById('city').value
  let state = document.getElementById('state').value
  let country = document.getElementById('country').value
  let address = city + ',' + state +',' + country
  let geocoder = new google.maps.Geocoder()
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      console.log(results[0].geometry.location)
      const weather = new Weather(results[0].geometry.location.lat(), results[0].geometry.location.lng())
      weather.getWeather()
      console.log('getWeather from inside coords.js')
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }

  // const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}`)
  // const responseData = await response.json()
  
  // console.log(responseData.results[0].geometry.location)

  // console.log('getCoords responseData')
})
}
}




// class Coords {
//   constructor(city, state, country) {
//     this.city = city
//     this.state = state
//     this.country = country
//     this.googleKey = 'AIzaSyDNmdL0UoyvDYAhB7l5UF7L_1_Y5lcIBCI'
//   }

//   // Fetch coordinates from API

//   async getLat() {
//     const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.city},${this.state},${this.country}&key=${this.googleKey}
//     `)
//     const responseData = await response.json()
//     const geometry = responseData.results[0].geometry.location
//     // console.log('getCoords(): ', responseData.results[0].geometry.location)
//     return geometry.lat
//   }
//   async getLng() {
//     const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.city},${this.state},${this.country}&key=${this.googleKey}
//     `)
//     const responseData = await response.json()
//     const geometry = responseData.results[0].geometry.location
//     // console.log('getCoords(): ', responseData.results[0].geometry.location)
//     return geometry.lng
//   }
// }

// class Weather {
//   constructor(city, state, country) {
//     this.apiKey = '8fcc777cf23420861993877a39a0489c'
//     this.city = city
//     this.state = state
//     this.country = country
//     // this.lat = lat
//     // this.lng = lng
//   }

// // Fetch weather from API

//   async getWeather() {
//     const coords = new Coords(this.city, this.state, this.country)
//     // coords.getCoords()
//     //   // .then(results => {
//     //   //   this.lat = results.lat
//     //   //   this.lng = results.lng
//     //   // })
//     //   .then(results => {
//     //     console.log('getCoords() inside of getWeather(): ', results.lat, results.lng)
//     //   })
//     //   .catch(err => console.log(err))
      
//     // console.log('outside of getCoords, inside of getWeather', results.lat)
//     const response = await fetchJsonp(`https://api.darksky.net/forecast/${this.apiKey}/${coords.getLat()},${this.lng}`)
//     const responseData = await response.json()
//     return responseData
//     }
  
//   changeLocation(city, state, country) {
//     this.city = city
//     this.state = state
//     this.country = country
//     const coords = new Coords(this.city, this.state, this.country)
//     // coords.getCoords()
//     console.log('Change Location: ', coords.getLat())
//     // const response = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.city},${this.state},${this.country}&key=${this.googleKey}
//     //   `).then(response => console.log('changeLocation(): ', response.geometry))
//     // this.lat = results[0].geometry.location.lat()
//     // this.lng = results[0].geometry.location.lng()
//   }
// }
// const weather = new Weather('Vancouver', 'BC', 'Canada') //, 49.2827291, -123.12073750000002
// const coords = new Coords('Olympia', 'WA', 'USA')
// weather.crossOrigin = true

// weather.changeLocation('Olympia', 'WA', 'USA')
// weather.getWeather()
// .then(results => {
//   console.log('getWeather() results from DarkSky: ', results)
// })
// .catch(err => console.log(err))

// get coordinates in lat, lng, and use for API call to darksky
// coords.getCoords()
// .then(results => {
//   // console.log('getCoords() results from Google: ', results.lat, results.lng)
//   this.apiKey = '8fcc777cf23420861993877a39a0489c'
//   this.lat = results.lat
//   this.lng = results.lng
//   fetchJsonp(`https://api.darksky.net/forecast/${this.apiKey}/${this.lat},${this.lng}`)
// })
// .catch(err => console.log(err))


// utilizing DarkSky weather API, as Weather Underground no longer provides free API access
// https://darksky.net/dev/docs


// console.log(`From weather.js, Lat: ${results[0].geometry.location.lat()}`)
// console.log('weather.js, fetching fixed Vancouver result via JSONP...',
// fetchJsonp('https://api.darksky.net/forecast/8fcc777cf23420861993877a39a0489c/49.2827291,-123.12073750000002')
// .then(res => res.json())
// .then(json => console.log(json)))

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