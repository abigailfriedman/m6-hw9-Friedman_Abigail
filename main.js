var input = document.getElementsByClassName('type-city')
var apiKey = "c9e8a1e5219afb02e36d02feb8ea798b";
var input = document.getElementsByClassName('type-city')
//var inputVal = input.value;
var btn = document.getElementsByClassName('button')
var weatherEl = document.getElementById('weatherContianer')

btn.onclick = function() {
  var input = document.getElementsByClassName('type-city')
  //var inputVal = input.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`) // make the request
  .then(function(res) {
    return res.json() 
  })
  .then(function(res) {
  renderWeather(res.results)
  //console.log(res)
   })
  }


   /*
    Name of the Searched City with Country Code
    Description of current weather
    Icon image for current weather conditions
    Current Temperature
    Current "feels like" Temperature
  */

  function renderWeather(weather) {
    weatherEl.innerHTML = ""
    weather.forEach(weather => {
      var newContainer = document.createElement('div')
      newContainer.classList.add('new-container')
  
      var pic = document.createElement('img')
      pic.src = user.picture.medium
      pic.style = "float: left; margin-right: 12px;"
      userContainer.appendChild(pic)
  
      var cityName = document.createElement('h3')
      cityName.textContent = res.name + " " + res.sys.country
      newContainer.appendChild(cityName)
  
      var description = document.createElement('p')
      cell.style.display = 'block'
      description.textContent = weather.description
      userContainer.appendChild(description)
  
      var temp = document.createElement('p')
      temp.style.display = 'block'
      temp.textContent = weather.temp
      userContainer.appendChild(temp)

      var feelsLike = document.createElement('p')
      feelsLike.style.display = 'block'
      feelsLike.textContent = weather.feelsLike
      userContainer.appendChild(feelsLike)
  
      userContainer.appendChild(
        document.createElement('hr')
      )
  
      weatherEl.appendChild(userContainer)
    });
  }

