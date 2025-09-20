/* === PART 2: FUNCTIONS & SCOPE === */

// Function with parameters + return value
function calculateArea(width, height) {
  return width * height;
}

// Function returning a random color (reusable logic)
function randomColor() {
  const colors = ["#e91e63", "#2196f3", "#4caf50", "#ff9800", "#9c27b0"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function with parameter (changes box background)
function changeBoxColor(color) {
  document.getElementById("animate-box").style.background = color;
}

// Global vs local scope demonstration
let globalMessage = "Hello from global scope!";
function showMessage() {
  let localMessage = "Hello from local scope!";
  console.log(globalMessage); // works everywhere
  console.log(localMessage);  // works only here
}
showMessage();

/* === PART 3: JS TRIGGERING CSS ANIMATIONS === */

// Animate Box
const box = document.getElementById("animate-box");
const animateBtn = document.getElementById("animate-btn");
animateBtn.addEventListener("click", () => {
  box.classList.toggle("active"); // triggers CSS transition
  console.log("Box area:", calculateArea(120, 120)); // uses function
});

// Extra Buttons
document.getElementById("color-btn").addEventListener("click", () => {
  changeBoxColor(randomColor()); // use parameter + return
});

document.getElementById("reset-btn").addEventListener("click", () => {
  box.classList.remove("active"); // stop animation
  changeBoxColor("coral"); // reset color
});

document.getElementById("surprise-btn").addEventListener("click", () => {
  box.classList.add("active");
  changeBoxColor(randomColor());
  setTimeout(() => box.classList.remove("active"), 1500);
});

/* === MODAL LOGIC === */
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.classList.add("show"); // triggers CSS slide/fade
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 500); // wait for animation
});
