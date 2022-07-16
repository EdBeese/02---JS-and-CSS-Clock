let secondStart = 90
let minuteStart = 90
let hourStart = 90
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  setInterval(() => {
    secondHand.style['transform'] = `rotate(${secondStart + 6}deg)`;
    secondStart = secondStart + 6;
    minuteHand.style['transform'] = `rotate(${minuteStart + 0.1}deg)`;
    minuteStart = minuteStart + 0.1;
    hourHand.style['transform'] = `rotate(${hourStart + 0.001666666666667}deg)`;
    hourStart = hourStart + 0.001666666666667;
  }, 1000);
}

setDate()
