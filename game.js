function spawnArrow() {
  const arrow = document.createElement("div");
  arrow.classList.add("arrow");
  arrow.style.top = "-40px";

  document.getElementById("game").appendChild(arrow);

  let pos = -40;
  const fall = setInterval(() => {
    pos += 3;
    arrow.style.top = pos + "px";

    if (pos > 450) {
      clearInterval(fall);
      arrow.remove();
    }
  }, 20);
}

setInterval(spawnArrow, 1000);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    console.log("Hit!");
  }
});
