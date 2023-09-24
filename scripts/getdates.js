//Get current year for the copyright
const d = new Date();
document.getElementById("currentYear").innerHTML = d.getFullYear();

//Get last modified date and time
let date = document.lastModified;
document.getElementById("lastUpdate").innerHTML = date;