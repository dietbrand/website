"use strict";

function clock() {
  const d = new Date();
  document.getElementById("displayClock").innerHTML = d.toLocaleTimeString();
}
// Run clock() once to set the time
clock();
setInterval(clock, 1000);
