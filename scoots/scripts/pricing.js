//Connexion test
console.log("Bonjour!");

//Declare url of data source
const rentalsUrl = "https://nrb2002.github.io/wdd230/scoots/data/pricing.json";

//Define an asynchronous function named "fetchRentals()" that uses a try block to handle errors.
async function fetchRentals(){
    try{
        //Store the results of the weatherUrl fetch into a variable named "response".
        const response = await fetch(rentalsUrl);
        //If the response is OK, then store the result of response.json() conversion in a variable named "data", 
        if(response.ok){
            const data = await response.json();
            //Output the results to the console for testing
            console.log(data);
            //output to the given HTML document
            displayRentals(data);
        //Else, throw an Error using the response.text().
        }else{
            throw Error(await response.text());
        }
    //Finish off the catch block by outputting any try error to the console.
    }catch (error){
        console.log(error);
    }
}
//invoke the fetchRentals() function with a call
fetchRentals();

//Build the function to output to the given HTML document
function displayRentals(data){
    //For testing purposes only
    //let companyName = data.name;
    //console.log(companyName);
    //For testing purposes only

    data.rentals.forEach(rental => {
        console.log(rental.model); //test

        //Generate product code
        const code = document.createElement("td");        
        code.textContent = rental.code;
        code.setAttribute("data-th", "Product Code");

        const vehicle = document.createElement("td");
        vehicle.setAttribute("data-th", "Vehicle Details");

        const img = document.createElement("img");
        img.setAttribute("src", rental.imageUrl);
        img.setAttribute("width", "150");

        const small = document.createElement("small");
        small.style.lineHeight = ".5rem"; 

        const p1 = document.createElement("p");
        p1.textContent = `${rental.make} ${rental.model} ${rental.vehicle} (${rental.desc})`;

        const p2 = document.createElement("p");
        p2.textContent = `Max Persons: ${rental.pers}`;

        const p3 = document.createElement("p");
        p3.textContent = `Number of Doors: ${rental.doors}`;

        small.appendChild(p1);
        small.appendChild(p2);
        small.appendChild(p3);

        vehicle.appendChild(img);
        vehicle.appendChild(small);

        //Append table data
        const tbody = document.querySelector("#pricingBody");
        const tr = document.createElement("tr");
        tr.appendChild(code);
        tr.appendChild(vehicle);
        tbody.appendChild(tr);


    //     rental.plans.forEach(plan => {
    //         console.log(plan[0].halfDay);//test
    //     });
    });

} 
