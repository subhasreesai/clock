let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;
const clockDisplay = document.getElementById('clock');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

function updateClock() {
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    clockDisplay.innerText = formattedTime;
  }
  
  function padZero(num) {
    return (num < 10 ? '0' : '') + num;
  }
  function startClock() {
    intervalId = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
      updateClock();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
  function stopClock() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
  startBtn.addEventListener('click', startClock);
  stopBtn.addEventListener('click', stopClock);
  
  updateClock();

      
  
