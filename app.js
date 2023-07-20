//Variables

//Buttons
const startBttn = document.querySelector(".start");
const stopBttn = document.querySelector(".stop");
const resetBttn = document.querySelector(".reset");

//Display Numbers
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let milliseconds = document.querySelector(".milliseconds");

let h = 0;
let m = 0;
let s = 0;
let ms = 0;

let interval;
//Function
function stopwatch(flag) {
  if (flag) {
    interval = setInterval(() => {
      ms++;

      if (ms === 100) {
        s++;
        ms = 0;
      }

      if (s === 60) {
        m++;
        s = 0;
      }

      if (m === 60) {
        h++;
        m = 0;
        s = 0;
      }

      if (ms < 10) {
        milliseconds.innerHTML = "0" + ms;
      } else {
        milliseconds.innerHTML = ms;
      }

      if (s < 10) {
        seconds.innerHTML = "0" + s;
      } else {
        seconds.innerHTML = s;
      }

      if (m < 10) {
        minutes.innerHTML = "0" + m;
      } else {
        minutes.innerHTML = m;
      }

      if (h < 10) {
        hours.innerHTML = "0" + h;
      } else {
        hours.innerHTML = h;
      }
    }, 10);
  } else {
    clearInterval(interval);
  }
}

function stopwatchReset() {
  ms = 0;
  s = 0;
  m = 0;
  h = 0;
  milliseconds.innerHTML = "00";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
}

//Event Listeners
startBttn.addEventListener("click", function () {
  startBttn.removeEventListener("click", stopwatch());
  stopwatch(true);
});
stopBttn.addEventListener("click", function () {
  stopwatch(false);
});
resetBttn.addEventListener("click", function () {
  stopwatchReset();
});
