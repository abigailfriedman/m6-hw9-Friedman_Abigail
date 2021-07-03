var input = document.getElementsByClassName('type-city')
var apiKey = "c9e8a1e5219afb02e36d02feb8ea798b";
var input = document.getElementsByClassName('type-city')
//var inputVal = input.value;
var btn = document.getElementsByClassName('button')
var weatherEl = 

btn.onclick = function() {
  var input = document.getElementsByClassName('type-city')
  //var inputVal = input.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`) // make the request
  .then(function(res) {
    return res.json() 
  })
  .then(function(res) {
  renderWeather(res.results)
  console.log(res)
   })
  }

