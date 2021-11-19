"use strict";

function updateClock() {
  const d = new Date();
  document.getElementById("displayClock").innerHTML = d.toLocaleTimeString();
}
// Run updateClock() once to set the time
updateClock();
setInterval(updateClock, 1000);
