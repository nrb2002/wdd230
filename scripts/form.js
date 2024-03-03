const pass1 = document.querySelector("#passwd");
const pass2 = document.querySelector("#confirmPasswd");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", confirmPass);

// This should be refactored.
function confirmPass() {
	if (pass1.value !== pass2.value) {
		message.textContent = "Passwords do not match! Please try again. ";
		message.style.visibility = "show";
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "#fff";
		pass2.style.color = "#000";
	}
}

//Validate form before submission
document.addEventListener("DOMContentLoaded", function () {
	// Function to handle form submission
	function handleSubmit(event) {
		// Prevent default form submission
		event.preventDefault();

		// Access form elements
		let myForm = event.target;
		let formData = new FormData(myForm);

		// Display form element values
		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
});


//Page rating script
const rangevalue = document.getElementById("rangevalue");
const rating = document.getElementById("rating");

// rating event listener
rating.addEventListener('change', displayRatingValue);
rating.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = rating.value;
}