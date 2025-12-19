



 
  let timeLeft = 120; // 2 minutes
  let interval;

  function startTest() {
    timeLeft = 120;
    updateTimeDisplay();

    document.getElementById("input").value = "";
    document.getElementById("input").disabled = false;
    document.getElementById("input").focus();
    document.getElementById("result").innerText = "";
    document.getElementById("same").innerText = "";

    interval = setInterval(() => {
      timeLeft--;
      updateTimeDisplay();

      if (timeLeft === 0) {
        stopTest();
      }
    }, 1000);
  }

  function updateTimeDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("time").innerText = 
      String(minutes).padStart(2, "0") + ":" + 
      String(seconds).padStart(2, "0");
  }

  function stopTest() {
    clearInterval(interval);
    document.getElementById("input").disabled = true;

    let typed = document.getElementById("input").value.trim();
    let original = document.getElementById("text").innerHTML.trim();

    let typedWords = typed.split(" ");
    let originalWords = original.split(" ");

    let count = 0;
    for (let i = 0; i < typedWords.length; i++) {
      if (typedWords[i] === originalWords[i]) {
        count++;
      }
    }
    document.getElementById("same").innerHTML = "Matches: " + count;

    let words = typed === "" ? 0 : typed.split(" ").length;
    let minutesUsed = (120 - timeLeft) / 60;
    let wpm = minutesUsed === 0 ? 0 : Math.round(words / minutesUsed);

    document.getElementById("result").innerText = "Time Up! Speed: " + wpm + " WPM";
  }


