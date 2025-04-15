// 🎯 Emoji Clicker
function startEmojiGame() {
    const gameArea = document.getElementById("game-area");
    gameArea.innerHTML = "<h3>😊 Emoji Clicker</h3><p>Click as many emojis as you can in 10 seconds!</p><div id='emoji-zone'></div><p id='emoji-score'>Score: 0</p>";
    let score = 0;
    let timer;
  
    function createEmoji() {
      const emoji = document.createElement("span");
      emoji.innerText = "😄";
      emoji.style.position = "absolute";
      emoji.style.left = Math.random() * 90 + "%";
      emoji.style.top = Math.random() * 80 + "%";
      emoji.style.fontSize = "30px";
      emoji.style.cursor = "pointer";
      emoji.onclick = () => {
        score++;
        document.getElementById("emoji-score").innerText = "Score: " + score;
        emoji.remove();
      };
      document.getElementById("emoji-zone").appendChild(emoji);
    }
  
    timer = setInterval(createEmoji, 500);
    setTimeout(() => {
      clearInterval(timer);
      document.getElementById("emoji-zone").innerHTML = `<p>⏱️ Time's up! Final Score: ${score}</p>`;
    }, 10000);
  }
  
  // 🧠 Memory Match
  function startMemoryGame() {
    const gameArea = document.getElementById("game-area");
    gameArea.innerHTML = `
      <h3>🧠 Memory Match</h3>
      <div id="memory-grid" class="memory-grid"></div>
      <p id="match-status">Match all pairs!</p>
      <p>⏱️ Time: <span id="timer">0</span>s | 🔄 Moves: <span id="moves">0</span></p>
    `;
  
    const emojis = ["🍎", "🍎", "🐶", "🐶", "🌟", "🌟", "🚗", "🚗"];
    emojis.sort(() => 0.5 - Math.random());
  
    const grid = document.getElementById("memory-grid");
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let matches = 0;
    let moves = 0;
    
    
    
    // Timer setup
    let time = 0;
    let timerInterval = setInterval(() => {
      time++;
      document.getElementById("timer").textContent = time;
    }, 1000);
  
    emojis.forEach((emoji) => {
      const card = document.createElement("div");
      card.classList.add("memory-card");
      card.dataset.emoji = emoji;
      card.innerHTML = `<span class="front">❓</span><span class="back">${emoji}</span>`;
  
      card.addEventListener("click", () => {
        if (lockBoard || card.classList.contains("flipped") || card === firstCard) return;
  
        card.classList.add("flipped");
    
        if (!firstCard) {
          firstCard = card;
        } else {
          secondCard = card;
          lockBoard = true;
          moves++;
          document.getElementById("moves").textContent = moves;
  
          if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
            firstCard = null;
            secondCard = null;
            lockBoard = false;
            matches++;
  
            if (matches === emojis.length / 2) {
              clearInterval(timerInterval);
              document.getElementById("match-status").innerText =
                `🎉 You matched all pairs in ${time} seconds with ${moves} moves!`;
            }
          } else {
            setTimeout(() => {
              firstCard.classList.remove("flipped");
              secondCard.classList.remove("flipped");
              firstCard = null;
              secondCard = null;
              lockBoard = false;
            }, 800);
          }
        }
      });
  
      grid.appendChild(card);
    });
  }
  
  // 💥 Bubble Pop
  function startBubblePop() {
    const gameArea = document.getElementById("game-area");
    gameArea.innerHTML = "<h3>🫧 Bubble Pop</h3><p>Pop as many bubbles as you can!</p><div id='bubble-container' style='position:relative;height:300px;border:1px solid #ccc;overflow:hidden;'></div><p id='bubble-score'>Score: 0</p>";
  
    let score = 0;
    let gameRunning = true;
  
    function createBubble() {
      if (!gameRunning) return;
  
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.left = Math.random() * 90 + "%";
      bubble.onclick = () => {
        score++;
        document.getElementById("bubble-score").innerText = "Score: " + score;
        bubble.remove();
      };
      document.getElementById("bubble-container").appendChild(bubble);
  
      setTimeout(() => bubble.remove(), 3000);
    }
  
    const gameTimer = setInterval(createBubble, 600);
    setTimeout(() => {
      gameRunning = false;
      clearInterval(gameTimer);
      document.getElementById("bubble-container").innerHTML += `<p>🎉 Final Score: ${score}</p>`;
    }, 15000);
  }
  