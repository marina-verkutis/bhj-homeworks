const timer = document.getElementById("timer")

function updateTimer() {
    let timerValue = parseInt(timer.textContent);
    if (timerValue < 1) {
        clearInterval(timerInterval)
        alert("Вы победили в конкурсе!")
    } 
    else {
        timer.textContent = timerValue - 1;
    }
}

const timerInterval = setInterval(updateTimer, 1000)