let timeRemaining = 60 * 60; 
const timerDisplay = document.getElementById('timer-display');

function updateTimer() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    timerDisplay.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeRemaining === 30 * 60) {
        alert("Залишилось менше половини часу!");
    }

    if (timeRemaining > 0) {
        timeRemaining--;
        setTimeout(updateTimer, 1000); 
    }
}

updateTimer();