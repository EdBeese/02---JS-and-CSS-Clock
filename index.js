// This first function will set the time and work like a real clock where minute and hour hands move incramentally
const loadTime = new Date();
const seconds = loadTime.getSeconds();
const minutes = loadTime.getMinutes();
const hours = loadTime.getHours();
let secondStart = 90 + (seconds * 6);
let minuteStart = 90 + (minutes * 6) + (seconds * 0.1);
let hourStart = 90 + (hours * 30) + (minutes * 0.25) + (seconds * 0.004166666666667)
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function tickingClock() {
  setInterval(() => {
    secondHand.style['transform'] = `rotate(${secondStart + 6}deg)`;
    secondStart = secondStart + 6;
    minuteHand.style['transform'] = `rotate(${minuteStart + 0.1}deg)`;
    minuteStart = minuteStart + 0.1;
    hourHand.style['transform'] = `rotate(${hourStart + 0.001666666666667}deg)`;
    hourStart = hourStart + 0.001666666666667;
  }, 1000);
}

// This function sets the current time, although it does not update hour and minites until the turn over.

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  secondHand.style['transform'] = `rotate(${(seconds * 6) + 90}deg)`;
  minuteHand.style['transform'] = `rotate(${(minutes * 6) + 90}deg)`;
  hourHand.style['transform'] = `rotate(${(hours * 30) + 90}deg)`;
}

function setTime() {
  setInterval(() => {
    setDate();
  }, 1000);
}

tickingClock();
