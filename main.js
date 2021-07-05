
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  var cityName = document.getElementsByClassName("search-box")[0].value;
  var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=c9e8a1e5219afb02e36d02feb8ea798b'
  
  fetch(weatherUrl)
  .then(weather => {
    return weather.json();
  }).then(displayResults);
}

function displayResults (weather) {
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = weather.name + " , " + weather.sys.country;

  let temp = document.querySelector('.current .temp');
  temp.innerText = Math.round(weather.main.temp);

  let feelsLike = document.querySelector('.current .feelsLike');
  feelsLike.innerText = Math.round(weather.main.feels_like);

  let weather_el = document.querySelector('.current .description');
  weather_el.innerText = weather.weather[0].main;
  

  var pic = document.createElement('img')
  pic.src = 'https://openweathermap.org/img/w/"+weather[0].icon+".png';
  document.getElementsByClassName('current').appendChild(pic)

  //var icon = 'https://openweathermap.org/img/w/'+weather[0].icon+'.png';
  //let wIcon = document.querySelector('.current .weatherIcon');
  //wIcon.innerText = 'https://openweathermap.org/img/w/"+weather[0].icon+".png';
 
}