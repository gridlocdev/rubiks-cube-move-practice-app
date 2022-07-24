// Time in seconds
const seconds = 10;
var i = 1;

const moveName = ["U", "D", "L", "R", "F", "B"];
const turnModifier = ["", "'", "2"];

document.querySelector("#secondsElapsed").textContent = "Seconds: " + i;
document.querySelector("#moveLabel").textContent = createNewMove();

function createNewMove() {
  const rotationDirection = Math.floor(Math.random() * Math.floor(6));
  const rotationCount = Math.floor(Math.random() * Math.floor(3));
  return moveName[rotationDirection] + turnModifier[rotationCount];
}

setInterval(() => {
  i++;
  if (i > seconds) {
    i -= seconds;
  }
  document.querySelector("#secondsElapsed").textContent = "Seconds: " + i;
}, 1000);

setInterval(() => {
  document.querySelector("#moveLabel").textContent = createNewMove();
}, seconds * 1000);
