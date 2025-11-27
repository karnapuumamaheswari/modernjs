let counter = 0;

const loading = setInterval(() => {
  console.log("Loading...");
  counter++;

  if (counter === 5) {
    clearInterval(loading);
    console.log("Loaded successfully!");
  }
}, 1000);
