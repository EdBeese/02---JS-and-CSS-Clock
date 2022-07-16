// This first function will move the clock around, but will always start at 12:00
let secondStart = 90
let minuteStart = 90
let hourStart = 90
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

setTime();
