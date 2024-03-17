//Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
//Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
const cards = document.querySelector('#cards');

//Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData (){
    //Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(url);
    //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data = await response.json();
    //Add a console.table() expression method to check the data response at this point in the console window.
    //console.table(data);
    //Comment out the console line and call a function named "displayProphets" and include the "data.prophets" argument. 
    //Why do we send data.prophets versus just the data variable? The displayProphets() function expects an array parameter.
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    /* Inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, 
    creating a new card each time.*/
    prophets.forEach((prophet) => {
        //Inside the HTML card building loop, do the following:
        //create a section element and store it in a variable named card using createElement(),
        let card = document.createElement("section");
        //create an h2 element and store it in a variable named "fullName",
        let fullName = document.createElement("h2");
        //create an img element and store it in a variable named "portrait",
        let portrait = document.createElement("img");

        //create a footnote for additional information
        let birth = document.createElement("small");
        let death = document.createElement("small");
        let children = document.createElement("small");
        
        //populate the heading element with the prophet's full name using a template string to build the full name,
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        
        //build the image element by setting the src, alt, loading, width, and height attributes using setAttribute().
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Populate the footnote
        birth.textContent = `Born on ${prophet.birthdate} in  ${prophet.birthplace}.`;
        
        if (prophet.death == null){
            death.textContent = "";
        }else{
            death.textContent = `Died on ${prophet.death}.` ;
        }
        


        children.textContent = `Number of children: ${prophet.numofchildren}.`;                              
                                
        

        //Using appendChild() on the section element named "card", add the heading and image elements one at a time.
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birth);
        card.appendChild(death);
        card.appendChild(children);

        //Finally, add the section card to the "cards" div that was selected at the beginning of the script file.
        cards.appendChild(card);
    });
}

