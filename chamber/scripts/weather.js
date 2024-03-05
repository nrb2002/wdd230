/* Fetching Data from OpenWeatherMap API */
const myCity = "Kinshasa";


let weather = {
  apiKey: "aba6ff9d6de967d5eac6fd79114693cc",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp;
    document.querySelector(".humidity").innerText = humidity;
    document.querySelector(".windSpeed").innerText = speed;
    document.querySelector(".weather").classList.remove("loading");


    //Compute Wind Chill - This section of code will be created later as a module in windchill.js and then exported to here. 
    //Convert celsius to fahrenheit
    //(0°C × 9/5) + 32 = 32°F
    const tempF = (temp * 9/5) + 32;
    
    //Convert km/h to mph
    const speedMPH = speed/1.609;

    //Check to make sure they meet the specification limits (<=50°F and >3.0mph) allowed to officially calculate the wind chill
    if((tempF <= 50) && (speedMPH > 3)){
      //calculate the wind chill factor
      const windChillIndex = 35.74 + (0.6215*tempF) - (35.75 * (Math.pow(speedMPH,0.16))) + (0.4275 * tempF * (Math.pow(speedMPH,0.16)));

      //Display the windchill value
      document.querySelector(".windChill").innerText = windChillIndex;
    }




  },
  search: function () {
    this.fetchWeather(myCity);
  },
};

/* Fetching Data from OpenCageData Geocoder */
let geocode = {
  reverseGeocode: function (latitude, longitude) {
    var apikey = "90a096f90b3e4715b6f2e536d934c5af";

    var api_url = "https://api.opencagedata.com/geocode/v1/json";

    var request_url =
      api_url +
      "?" +
      "key=" +
      apikey +
      "&q=" +
      encodeURIComponent(latitude + "," + longitude) +
      "&pretty=1" +
      "&no_annotations=1";

    var request = new XMLHttpRequest();
    request.open("GET", request_url, true);

    request.onload = function () {

      if (request.status == 200) {
        var data = JSON.parse(request.responseText);
        weather.fetchWeather(data.results[0].components.city);
        console.log(data.results[0].components.city)
      } else if (request.status <= 500) {

        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        console.log("error msg: " + data.status.message);
      } else {
        console.log("server error");
      }
    };

    request.onerror = function () {
      console.log("unable to connect to server");
    };

    request.send(); 
  },
  getLocation: function() {
    function success (data) {
      geocode.reverseGeocode(data.coords.latitude, data.coords.longitude);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, console.error);
    }
    else {
      weather.fetchWeather(myCity);
    }
  }
};

//Search weather information
weather.fetchWeather(myCity);

//Reload page every 5 min
setInterval(function() {
  location.reload();
}, 300000);



