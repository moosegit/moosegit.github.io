// This variable stores the "Pick a Color" button
const originalButton = document.getElementById("original-button");

// This variable stores the "Mystery Color" button
const mysteryButton = document.getElementById("mystery-button");

// NOTE:
// r=red, g=green, b=blue
// All 255 = white
// All 0 (zeros) = black
//rgb(255, 255, 255)

// This random number function that will creates color codes for the randomColor variable

function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
function colorChange(event) {
  const randomNumber = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  event.target.style.backgroundColor = randomNumber;
}

originalButton.onclick = colorChange;
mysteryButton.onwheel = colorChange;

// // NOTE: line below is not working!
//  const randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
