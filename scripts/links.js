//create a baseURL variable that references your root wdd230 repository, GitHub pages URL
const baseURL = "https://nrb2002.github.io/wdd230/";
//add a variable named linksURL that references your links.json data file
const linksURL = "https://nrb2002.github.io/wdd230/data/links.json";

//Get the unordered list
const ul = document.querySelector("#activitiesList");

//Write an asynchronous function to get the links data in the links.json data file.
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data); //Test the JSON result by writing the data to the console.

    

    //add a new line of code at the end that calls a function that will build out the available activity links from the data response.
    // Name the function displayLinks.
    // Send the data as an argument.
    displayLinks(data.lessons);
}
  
getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {        
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = `${week.lesson}: `; //Print the week number in a span
        li.appendChild(span); //Append the week number to the bullet

        //Go through the weekly links array
        week.links.forEach((link) => {
            let lastLink = week.links.slice(-1); //Get last index of the array
            
            let a = document.createElement("a");
            a.textContent = `${link.title}`;
            a.setAttribute("href", link.url);
            span.appendChild(a);
            
            //Check 
            if(lastLink !== week.links.length - 1){  
                let sep = " | ";              
                span.append(sep);
                li.appendChild(span);                
            }
        });
        //Append the list bullet to the ul
        ul.appendChild(li);
    });
}