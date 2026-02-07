const qrinput = document.getElementById("qr-text");
const qrbutton = document.getElementById("qr-button");
const qrimg = document.getElementById("qr-img");

console.log(qrinput, qrbutton, qrimg);

qrbutton.addEventListener("click", () => {

    const inputValue = qrinput.value;
    console.log(inputValue);

    if (!inputValue) {   // Check if the input value is empty
        alert("Please enter a value to generate QR code.");
        return;
    }
    else{ 
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;  // Set the source of the image to the QR code API with the input value.
        qrimg.innerHTML = `<img src="${qrimg.src}" alt="QR Code">`; // Update the inner HTML of the image element to update src attribute.
    }
})