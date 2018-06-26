class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.descDaily = document.getElementById('w-desc-daily')
    this.descHourly = document.getElementById('w-desc-hourly')
    // this.descMinutely = document.getElementById('w-desc-minutely')
    // this.string = document.getElementById('w-string')
    this.temp = document.getElementById('w-temp')
    this.icon2 = document.getElementById('icon2')
    this.icon = document.getElementById('w-icon')
    this.details = document.getElementById('w-details')
    this.pressure = document.getElementById('w-pressure')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    this.wind = document.getElementById('w-wind')
    this.city = document.getElementById('city').value
    this.state = document.getElementById('state').value
    this.country = document.getElementById('country').value
    
 
}
  

  paint(weather) {
    let address
    if(this.city === '' && localStorage.getItem('address') === '') {
      this.city = 'Vancouver'
      this.state = 'BC'
      this.country = 'Canada'
    } 
    if(localStorage.getItem('address') !== '') {
      this.location.textContent = localStorage.getItem('address')
    } else {
      this.location.textContent = this.city + ', ' + this.state +', ' + this.country
    } 
    // this.location.textContent =  this.city + ', ' + this.state +', ' + this.country
    // this.location.textContent = this.address
    this.descDaily.textContent = weather.daily.summary
    this.descHourly.textContent = weather.hourly.summary
    // this.descMinutely.textContent = weather.minutely.summary
    // this.string.textContent = weather.currently.summary
    this.temp.textContent = `Temperature: ${weather.currently.temperature}`
    // this.icon.setAttribute('src', weather.currently.icon)
    // this.icon2.setAttribute('src', weather.currently.icon)
    // this.details.textContent = weather.timezone
    this.humidity.textContent = `Humidity: ${weather.currently.humidity}`
    this.pressure.textContent = `Pressure: ${weather.currently.pressure}`
    this.feelsLike.textContent = `Feels Like: ${weather.currently.apparentTemperature}`
    this.wind.textContent = `Windspeed: ${weather.currently.windSpeed}`
    
    let weatherType = weather.currently.icon

  var skycons = new Skycons({"color": "yellow"}, {"resizeClear": true});
  // on Android, a nasty hack is needed: {"resizeClear": true}

  // skycons.add("icon2", weatherType);
  skycons.set("icon2", weatherType);

  // start animation!
  skycons.play();

  // you can also halt animation with skycons.pause()
  }
}