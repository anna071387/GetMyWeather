async function getLatLon(query) {
    var requestUrl =`https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=ec7fe5d89923c7457fe5b2b6882b88a3&units=imperial`;
    try {
       var location = await fetch(requestUrl)
       var data = await location.json()
       return {
        lon: data[0].lon,
        lat: data[0].lat
    }
    } catch (error) {
        
    }
  
    }


function getWeather (){
    var weatherContainer = document.querySelector('weather')
    
}

(async function() {
     console.log(await getLatLon('Boston'));

})();
// getLatLon('Boston');





getWeather();
// getForcast(); 

// renderForcast();




// Choose days counts
// https://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={ec7fe5d89923c7457fe5b2b6882b88a3}&units=imperial
// Long And lat
// https://api.openweathermap.org/geo/1.0/direct?q=London=5&appid={ec7fe5d89923c7457fe5b2b6882b88a3}&units=imperial
// Current weather
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ec7fe5d89923c7457fe5b2b6882b88a3}&units=imperial


