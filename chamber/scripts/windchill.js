const temperature = parseFloat(document.querySelector(".temp").innerHTML);
const speed = parseFloat(document.querySelector(".windSpeed").innerHTML);

if((temperature<=50) && (speed > 3)){
    console.log(temperature);
}
else{
    document.querySelector(".windChill").innerHTML = "N/A";
    console.log(temperature)
}