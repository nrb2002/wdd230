//Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const membersUrl = 'https://nrb2002.github.io/wdd230/chamber/data/members.json';
//Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
const cards = document.querySelector('.cards');

//Create a async defined function named "getProphetData" to fetch data from the JSON source membersUrl using the await fetch() method.
async function getMembersData (){
    //Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(membersUrl);
    //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data = await response.json();
    //Display members
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    /* Inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, 
    creating a new card each time.*/
    members.forEach((member) => {
        //Inside the HTML card building loop, do the following:
        //create a section element and store it in a variable named card using createElement(),
        let card = document.createElement("section");
        //create an h2 element and store it in a variable named "fullName",
        let companyName = document.createElement("h3");
        //create an img element and store it in a variable named "portrait",
        let logo = document.createElement("img");

        //create a footnote for additional information
        let sector = document.createElement("small");
        let productStatement = document.createElement("small");
        let membershipLevel = document.createElement("small");
        
        //populate the heading element with the prophet's full name using a template string to build the full name,
        companyName.textContent = `${member.companyName}`;
        sector.textContent  = `Business Type: ${member.sector}`;
        productStatement.textContent = `${member.productStatement}`;
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        
        //build the image element by setting the src, alt, loading, width, and height attributes using setAttribute().
        logo.setAttribute('src', member.logoUrl);
        logo.setAttribute('alt', `Logo of ${member.companyName}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        //Using appendChild() on the section element named "card", add the heading and image elements one at a time.
        card.appendChild(companyName);
        // card.appendChild(productStatement);
        card.appendChild(logo);
        card.appendChild(membershipLevel);
        card.appendChild(sector);

        //Finally, add the section card to the "cards" div that was selected at the beginning of the script file.
        cards.appendChild(card);
    });
}




