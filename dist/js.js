let apiKey = 'b93ff4fc403576a36fa3ecf7d9987df7';

var cityName;
var inVal = document.querySelector('.search');
var outVal = document.querySelector('.card');
var search = document.querySelector('.search-button')
let putValue = document.querySelector('.list');
function fetchApi(cityName){
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
   .then(data => data.json())
   .then(data1 => displayWather(data1));
}
 function matchCity(){
    cityName = this.value;
    fetchApi(cityName);
    inVal.value = "";
 }
 
 function getInputValue(){
    var inputVal = inVal.value;
      cityName = inputVal;
    fetchApi(cityName);
    inVal.value = "";
}
function displayWather(data1){
   var city = data1.name;
   var desc = data1.weather[0].description;
    var ico = data1.weather[0].icon;
    var temperature = data1.main.temp;
    var humid = data1.main.humidity;
    var speed = data1.wind.speed;
   document.querySelector('.card1').style.display = "none";
  let stuff = `<div class="card mb-12 ml:mr-12 group">
  <div class="remove invisible group-hover:visible"><img src="1.png" class="w-4 h-4 remove1"></div>
   <h1 class="city text-white text-3xl">${city}</h1>
   <h3 class="temp text-white text-xl">${temperature}°C</h3>
   <img src="https://openweathermap.org/img/wn/${ico}.png" class="img w-20 h-20">
   <h5 class="desc text-white text-lg">${desc}</h5>
   <h5 class="humid text-white text-sm">Humidity: ${humid}%</h5>
   <h5 class="speed text-white text-sm">Wind Speed: ${speed}km/h</h5>
   </div>`
  putValue.insertAdjacentHTML('afterbegin',stuff);
}
inVal.addEventListener('keypress', function(e){
   if (e.key === "Enter"){
        getInputValue();
   }
});
search.addEventListener('click', getInputValue);
let putvalue = document.querySelector('.list');

document.addEventListener('click', function(e){
   if(e.target.matches('.remove1'))
   {
      var element = e.target.parentElement.parentElement;
      element.remove()
   }
})

