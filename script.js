const videos = {
  happy: [
    "https://www.youtube.com/embed/gjnrtCKZqYg", // Pharrell - Happy
    "https://www.youtube.com/embed/ZbZSe6N_BXs"  // Cute animals compilation
  ],
  motivated: [
    "https://www.youtube.com/embed/UNQhuFL6CWg", // Motivational Speech
    "https://www.youtube.com/embed/Tyy4jHlmZkE"  // Workout Motivation
  ],
  calm: [
    "https://www.youtube.com/embed/2OEL4P1Rz04", // Calming forest
    "https://www.youtube.com/embed/lFcSrYw-ARY"  // Relaxing piano
  ]
};


function showSection(sectionId) {
  document.getElementById("reels").style.display = sectionId === 'reels' ? 'block' : 'none';
  document.getElementById("games").style.display = sectionId === 'games' ? 'block' : 'none';
}

function showVideos() {
  const mood = document.getElementById("mood-select").value;
  const container = document.getElementById("video-container");
  container.innerHTML = ""; // Clear old videos

  if (mood && videos[mood]) {
    videos[mood].forEach(link => {
      const iframe = document.createElement("iframe");
      iframe.src = link;
      iframe.width = "300";
      iframe.height = "200";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      container.appendChild(iframe);
    });
  } else {
    container.innerHTML = "<p>Please select a mood!</p>";
  }
}
