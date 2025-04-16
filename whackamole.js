const squares = document.querySelectorAll('.square');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');

let score = 0;
let molePosition;
let moleTimerId;
let countdownTimerId;
let timeLeft = 30;

function randomSquare() {
  squares.forEach(square => square.classList.remove('mole'));
  const random = squares[Math.floor(Math.random() * squares.length)];
  random.classList.add('mole');
  molePosition = random.id;
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id === molePosition) {
      score++;
      scoreDisplay.textContent = score;
      molePosition = null;
    }
  });
});

function moveMole() {
  moleTimerId = setInterval(randomSquare, 1200);
}

function countdown() {
  timeLeft--;
  timeLeftDisplay.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(countdownTimerId);
    clearInterval(moleTimerId);
    alert("⏰ Time's up! Your score is: " + score);
  }
}

function stopGame() {
  clearInterval(countdownTimerId);
  clearInterval(moleTimerId);
  alert("Game stopped! Your score was: " + score);
}

// Start the game
moveMole();
countdownTimerId = setInterval(countdown, 1000);
