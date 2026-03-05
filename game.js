// LOADING SCREEN → MAIN MENU
setTimeout(() => {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("main-menu").style.display = "flex";
}, 2000);

// HONK SOUND
function playHonk() {
  const honk = document.getElementById("honk-sound");
  honk.currentTime = 0;
  honk.play();
}

// MENU BUTTONS
function startGame() {
  document.getElementById("main-menu").style.display = "none";
  document.getElementById("game").style.display = "block";
}

function openSettings() {
  alert("Settings coming soon!");
}

function openCredits() {
  alert("Credits:\nE.T Kawanza\nCopilot");
}
