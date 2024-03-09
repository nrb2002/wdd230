//Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

//Get current year for the copyright
const d = new Date();
document.getElementById("currentYear").innerHTML = d.getFullYear();

//Get last modified date and time
let date = document.lastModified;
document.getElementById("lastUpdate").innerHTML = date;



// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
	if(numVisits == 1){
		visitsDisplay.textContent = `🥳 Welcome! Let us know if you have any questions.`;
	}
} else {
	
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);




// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
