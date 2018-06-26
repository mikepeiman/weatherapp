class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.descDaily = document.getElementById('w-desc-daily')
    this.descHourly = document.getElementById('w-desc-hourly')
    this.descMinutely = document.getElementById('w-desc-minutely')
    this.string = document.getElementById('w-string')
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
    
    if(this.city === '') {
      this.city = 'Vancouver'
      this.state = 'BC'
      this.country = 'Canada'
    }
    this.address = this.city + ', ' + this.state +', ' + this.country
   
  }

  paint(weather) {
    // this.location.innerHTML = address
    this.location.textContent = this.address
    this.descDaily.textContent = weather.daily.summary
    this.descHourly.textContent = weather.hourly.summary
    this.descMinutely.textContent = weather.minutely.summary
    this.string.textContent = weather.currently.summary
    this.temp.textContent = weather.currently.temperature
    // this.icon.setAttribute('src', weather.currently.icon)
    // this.icon2.setAttribute('src', weather.currently.icon)
    // this.details.textContent = weather.timezone
    this.humidity.textContent = `Humidity: ${weather.currently.humidity}`
    this.pressure.textContent = `Pressure: ${weather.currently.pressure}`
    this.feelsLike.textContent = `Feels Like: ${weather.currently.apparentTemperature}`
    this.wind.textContent = `Windspeed: ${weather.currently.windSpeed}`
    
    let weatherType = weather.currently.icon

  var skycons = new Skycons({"color": "yellow"});
  // // on Android, a nasty hack is needed: {"resizeClear": true}

  // // you can add a canvas by it's ID...
  // skycons.add("icon2", Skycons.CLEAR_DAY);
  skycons.add("icon2", weatherType);
  // skycons.set("icon2", weatherType);

  // // ...or by the canvas DOM element itself.
  // skycons.add(document.getElementById("icon2"), Skycons.RAIN);

  // // if you're using the Forecast API, you can also supply
  // // strings: "partly-cloudy-day" or "rain".

  // // start animation!
  skycons.play();

  // // you can also halt animation with skycons.pause()

  // // want to change the icon? no problem:
  // skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);


  //   function skycons() {
//     var i,
//         icons = new Skycons({
//             "color" : "#FFFFFF",
//             "resizeClear": true // nasty android hack
//         }),
//         list  = [ // listing of all possible icons
//             "clear-day",
//             "clear-night",
//             "partly-cloudy-day",
//             "partly-cloudy-night",
//             "cloudy",
//             "rain",
//             "sleet",
//             "snow",
//             "wind",
//             "fog"
//         ];

// // loop thru icon list array
// for(i = list.length; i--;) {
//     var weatherType = list[i], // select each icon from list array
//             // icons will have the name in the array above attached to the 
//             // canvas element as a class so let's hook into them.
//             elements    = document.getElementsByClassName( weatherType );

//     // loop thru the elements now and set them up
//     for (let e = elements.length; e--;) {
//         icons.set(elements[e], weatherType);
//     }
// }
//  icons.add("icon1")
// // animate the icons
// icons.play();
// }
// skycons()

  }
}