'use strict';

console.log("Hello! Lovely to see you here 😊.")

const myVar = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("displayClock").innerHTML = d.toLocaleTimeString();
}