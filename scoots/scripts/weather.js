//select all of the HTML elements that will need to be manipulated and assign them to const variables.
const cityName = document.querySelector("#city");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const windSpeed= document.querySelector("#windSpeed");
const maxTemp = document.querySelector(".maxTemp");

//Specify the latitude and longitude 
const lat = 20.4326;
const lon = -86.9219;

//Set the units to imperial: "units=imperial"
const units = "imperial";
//Provide your API key: "appid=[enter your key here]"
const apiKey = "d100c53e022ac740b8e46f1ae5caf79f";
//Declare a const variable named "weatherUrl" and assign it a valid weatherUrl string as given in the openweathermap api documentation.
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

//Define an asynchronous function named "fetchCurrentWeather()" that uses a try block to handle errors.
async function fetchCurrentWeather(){
    try{
        //Store the results of the weatherUrl fetch into a variable named "response".
        const response = await fetch(weatherUrl);
        //If the response is OK, then store the result of response.json() conversion in a variable named "data", 
        if(response.ok){
            const data = await response.json();
            //Output the results to the console for testing
            console.log(data);
            //output to the given HTML document
            displayCurrentWeather(data);
        //Else, throw an Error using the response.text().
        }else{
            throw Error(await response.text());
        }
    //Finish off the catch block by outputting any try error to the console.
    }catch (error){
        console.log(error);
    }
}
//invoke the fetchCurrentWeather() function with a call
fetchCurrentWeather();

//Build the function to output to the given HTML document
function displayCurrentWeather(data){
    cityName.innerHTML = "Conzumel";
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt", "Weather Icon");
    weatherIcon.setAttribute("loading","lazy" );
    
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;

    humidity.textContent = `${data.main.humidity}%`; 
    windSpeed.textContent = `${data.wind.speed}mph`;
    maxTemp.textContent = `Max Temperature : ${Math.round(data.main.temp_max)}°F. Make sure you dress up accordingly. `;

} 

//Forecast on next day at 03pm
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

//Define an asynchronous function named "fetchForecast()" that uses a try block to handle errors.
async function fetchForecast(){
    try{
        //Store the results of the weatherUrl fetch into a variable named "response".
        const response = await fetch(forecastUrl);
        //If the response is OK, then store the result of response.json() conversion in a variable named "data", 
        if(response.ok){
            const data = await response.json();
            //Output the results to the console for testing
            console.log(data);
            //output to the given HTML document
            displayForecast(data);
        //Else, throw an Error using the response.text().
        }else{
            throw Error(await response.text());
        }
    //Finish off the catch block by outputting any try error to the console.
    }catch (error){
        console.log(error);
    }
}
//invoke the fetchForecast() function with a call
fetchForecast();

//Build the function to output to the given HTML document
function displayForecast(data){
    `<tr id="weather-data">
        <td id="datetime">${data.list[0].dt}</td>
        <td id="daily-temp">80°F</td>
        <td id="weather-icon-daily"></td>
        <td id="daily-desc">Clear Sky</td>
    </tr>`
    const datetime = document.createElement("div");
    datetime.textContent = `${data.list[0].dt}`;
    // cityName.innerHTML = "Conzumel";
    // currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    
    // const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // weatherIcon.setAttribute("src",iconsrc);
    // weatherIcon.setAttribute("alt", "Weather Icon");
    // weatherIcon.setAttribute("loading","lazy" );
    
    // let desc = data.weather[0].description;
    // captionDesc.textContent = `${desc}`;

    // humidity.textContent = `${data.main.humidity}%`; 
    // windSpeed.textContent = `${data.wind.speed}mph`;
    // maxTemp.textContent = `Max Temperature : ${Math.round(data.main.temp_max)}°F. Make sure you dress up accordingly. `;

} 
