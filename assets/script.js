//  Allows to draw data for a searched city, api key applied
// function fetchWeather(query){

// // draws response from data
// function fetchWeather(requestUrl) {

// var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=784613bb935644a3c30729d18d748757&units=imperial";
var searchFormEl = document.getElementById("search-form");
var searchInputEl = document.getElementById("search-input");
var headerCityCurrent = document.querySelector('.header-city-current');

searchFormEl.addEventListener("submit", function (event) {
  event.preventDefault();

  var searchInput = searchInputEl.value;
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=784613bb935644a3c30729d18d748757&units=imperial`;


  console.log(searchInputEl.value);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //   console.log(data);
      // console.log(data.list[0].main.temp + "F");
      renderCurrentWeather(data);
    })

    .catch(function (err) {
      console.log(err);
    });
});


 
function renderCurrentWeather(weatherData) {
    console.log(headerCityCurrent);


}













// }

// call function

// separates data results
//  function renderWeather (weather) {
//     var resultsContainer =document.querySelector("#weather-results");
//     var city =document.createElement('h2');
//     city.textContent = weather.name;
//     resultsContainer.append(city);
//     // City, humidity, temperature, wind

//     var temp=document.createElement('p');
//     temp.textContent = 'Temp: ' + weather.main.temp + "F";
//     resultsContainer.append(temp);

//     var humidity=document.createElement('p');
//     humidity.textContent = 'Humidity: ' + weather.main.humidity + "%";
//     resultsContainer.append(humidity);

//     var wind=document.createElement('p');
//     wind.textContent = 'Wind: ' + weather.wind.speed + "mph";
//     resultsContainer.append(wind);

//     details.append('')

//  }

//  fetchWeather();
//  renderWeather();

// var city= document.getElementById('')

// async function getLatLon(query) {
//     var requestUrl =`https://api.openweathermap.org/geo/1.0/direct?q=${query}&=imperial`;
//     try {
//        var location = await fetch(requestUrl)
//        var data = await location.json()
//        return {
//         lon: data[0].lon,
//         lat: data[0].lat
//     }
//     } catch (error) {

//    }
//     }

// function getWeather (){
//     var weatherContainer = document.querySelector('weather')

// }

// (async function() {
//      console.log(await getLatLon(city));
// })();

// getWeather();
// getForcast();

// renderForcast();

// Choose days counts
// https://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={}&units=imperial
// Long And lat
// https://api.openweathermap.org/geo/1.0/direct?q=London=5&appid={}&units=imperial
// Current weather
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={&units=imperial
