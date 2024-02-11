//In your js file, declare three const variables that hold references to the input, button, and list elements.
const b = document.querySelector("#addChapter");
const input = document.querySelector("#favchap");
const ul = document.querySelector("#list");

//Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function. 
b.addEventListener("click", () => {
    
    //In the click event function block {...}, do the following:

    //check to make sure the input is not blank before doing the following remaining tasks in this list using an if block,
    if (input.value != "")
    {
        // create a li element
        const li = document.createElement("li");
        // create a delete button
        const del = document.createElement("button");

        // populate the li elements textContent or innerHTML with the input value
        li.textContent = input.value;
        
        // populate the button textContent with a ❌
        del.textContent = "❌"; 
        // append the li element with the delete button
        li.append(del);
        // append the li element to the unordered list in your HTML
        ul.appendChild(li);

        

        //add an event listener to the delete button that removes the li element when clicked
        del.addEventListener("click", () => {
            ul.removeChild(li);            
        });

        // add an event listener to the delete button that removes the li element when clicked
        input.focus();

        // change the input value to nothing or the empty string to clean up the interface for the user
        input.value = "";          
    }

    //otherwise provide a message or at least do nothing and return the .focus() to the input field.
    else {
        alert("Please enter a book and chapter!"); //pop-up message
        input.focus();
    }
});
