class Storage {
  constructor() {
    // this.city = city
    // this.state = state
    // this.country = country
    this.lat
    this.lng
    // this.defaultCity = 'Whistler'
    // this.defaultState = 'BC'
    // this.defaultCountry = 'Canada'
    this.defaultLat = 41.2827291
    this.defaultLng = -123.12073750000002
  }
  getLocationData() {

    if(localStorage.getItem('lat') === null | localStorage.getItem('lat') === "undefined") {
      this.lat = this.defaultLat
    } else {
      this.lat = localStorage.getItem('lat')
    }
    if(localStorage.getItem('lng') === null | localStorage.getItem('lng') === "undefined") {
      this.lng =  this.defaultLng
    } else {
      this.lng = localStorage.getItem('lng')
    }

    return {
      lat: this.lat,
      lng: this.lng,
      address: this.address
    }
  }

  setLocationData(lat, lng, address) {
    // localStorage.setItem('city', city)
    // localStorage.setItem('state', state)
    // localStorage.setItem('country', country)
    localStorage.setItem('lat', lat)
    localStorage.setItem('lng', lng)
    localStorage.setItem('address', address)
  }
}