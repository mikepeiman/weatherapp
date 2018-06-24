// utilizing DarkSky weather API, as Weather Underground no longer provides free API access
// https://darksky.net/dev/docs

class Weather {
  constructor() {
    this.apiKey = '8fcc777cf23420861993877a39a0489c'
    this.city = city
    this.lat = lat
    this.long = lon
    this.country = country
  }

// const GMAPI = new google.maps.Geocoder

  async getWeather() {
    const response = await fetch(`https://api.darksky.net/forecast/${this.apiKey}/${this.lat},${this.lon}`)

    const responseData = await response.json()

    return responseData.currently


    }
  
  changeLocation(city, country) {
    this.city = city
    this.country = country
  }
}
