const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number of seconds to countdown: ", function (seconds) {
  let timeLeft = Number(seconds);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number!");
    rl.close();
    return;
  }

  console.log(`Countdown Started: ${timeLeft} seconds`);

  const timer = setInterval(() => {
    timeLeft--;
    console.log(`Time Left: ${timeLeft}`);

    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  const checkStop = () => {
    setTimeout(() => {
      rl.question("Press 's' to stop countdown: ", function (key) {
        if (key.toLowerCase() === "s") {
          clearInterval(timer);
          console.log("Countdown Stopped by User!");
          rl.close();
        } else {
          checkStop();
        }
      });
    }, 500);
  };

  checkStop();
});
