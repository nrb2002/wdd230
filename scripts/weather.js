//select all of the HTML elements that will need to be manipulated and assign them to const variables.
const cityName = document.querySelector("#city");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const windSpeed= document.querySelector("#windSpeed");

//Specify the latitude and longitude of Trier, Germany using the information you have gathered and the examples provided.
const lat = -4.322447;
const lon = 15.307045;
//Set the units to imperial: "units=imperial"
const units = "imperial";
//Provide your API key: "appid=[enter your key here]"
const apiKey = "d100c53e022ac740b8e46f1ae5caf79f";
//Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

//Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
async function apiFetch(){
    try{
        //Store the results of the URL fetch into a variable named "response".
        const response = await fetch(url);
        //If the response is OK, then store the result of response.json() conversion in a variable named "data", 
        if(response.ok){
            const data = await response.json();
            //Output the results to the console for testing
            console.log(data);
            //output to the given HTML document
            displayResults(data);
        //Else, throw an Error using the response.text().
        }else{
            throw Error(await response.text());
        }
    //Finish off the catch block by outputting any try error to the console.
    }catch (error){
        console.log(error);
    }
}
//invoke the apiFetch() function with a call
apiFetch();

//Build the displayResults function to output to the given HTML document
function displayResults(data){
    cityName.innerHTML = "Kinshasa";
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt", "Weather Icon");
    weatherIcon.setAttribute("loading","lazy" );
    
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;

    humidity.textContent = `${data.main.humidity}%`; 
    windSpeed.textContent = `${data.wind.speed}mph`;
}  
    
