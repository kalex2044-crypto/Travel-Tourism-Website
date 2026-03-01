let images = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg"
];

let i = 0;

function slideShow() {
    document.getElementById("slideImage").src = images[i];
    i++;
    if (i == images.length) i = 0;
}

setInterval(slideShow, 3000);

function calculate() {
    let price = document.getElementById("package").value;
    let persons = document.getElementById("persons").value;
    let total = price * persons;
    document.getElementById("total").innerText = "Total Price: ₹" + total;
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name == "" || email == "") {
        alert("Please fill all fields");
        return false;
    }
    alert("Booking Successful!");
    return true;
}