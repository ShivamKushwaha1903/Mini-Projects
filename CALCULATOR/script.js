let input = document.getElementById('inputBox');      // Get the input box in which result will be displayed
let buttons = document.querySelectorAll('button');    // Select all buttons

let string = "";     // Initialize an empty string to store the input expression

let arr = Array.from(buttons);   // to make a array of buttons

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            string = eval(string);     // Evaluate the expression and update the string
            input.value = string;      // Display the result in the input box
        
        }else if (e.target.innerText == 'AC') {
            string = "";
            input.value = string;      // Clear the input box

        } else if (e.target.innerText == 'DEL') {
            string = string.slice(0, -1);     // Remove the last character from the string
            input.value = string;      // Update the input box
        }

        else {
            string += e.target.innerText;     // Append the clicked button's text to the string
            input.value = string;     // Update the input box with the current string
        }
    })
})        