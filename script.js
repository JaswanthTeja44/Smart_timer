    let interval;

    function toggleTheme() {
      const body = document.body;
      body.setAttribute("data-theme", body.getAttribute("data-theme") === "dark" ? "light" : "dark");
    }

    function formatTime(mins, secs) {
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function startTimer() {
      clearInterval(interval);
      const minInput = document.getElementById("minutes");
      const secInput = document.getElementById("seconds");
      let minutes = parseInt(minInput.value, 10);
      let seconds = parseInt(secInput.value, 10);

      if (isNaN(minutes)) minutes = 0;
      if (isNaN(seconds)) seconds = 0;

      if (minutes === 0 && seconds === 0) {
        alert("Please enter a valid time");
        return;
      }

      const display = document.getElementById("timerDisplay");

      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            const selectedSound = document.getElementById("alertSound").value;
            document.getElementById(selectedSound).play();
            display.classList.add("alert");
            return;
          }
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        display.textContent = formatTime(minutes, seconds);
      }, 1000);

      display.textContent = formatTime(minutes, seconds);
      display.classList.remove("alert");
    }

    function stopTimer() {
      clearInterval(interval);
    }

    function resetTimer() {
      clearInterval(interval);
      document.getElementById("minutes").value = "";
      document.getElementById("seconds").value = "";
      document.getElementById("timerDisplay").textContent = "00:00";
      document.getElementById("timerDisplay").classList.remove("alert");
    }

