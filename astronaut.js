

const astronaut = document.querySelector(".astronaut");

let isBoarding = false; // false = astronaut floats normally
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
let velX = 2;
let velY = 2;
let rotation = 0;
let rotationSpeed = 0.5; // spin speed
let isDragging = false;
let offsetX, offsetY;
let lastMouseX, lastMouseY;

function moveAstronaut() {
  if (!isDragging && !isBoarding) {   // keep moving normally unless boarding
    posX += velX;
    posY += velY;

    // Bounce edges
    if (posX <= 0 || posX + astronaut.offsetWidth >= window.innerWidth) {
      velX *= -0.8;
    }
    if (posY <= 0 || posY + astronaut.offsetHeight >= window.innerHeight) {
      velY *= -0.8;
    }

    rotation += rotationSpeed;

    astronaut.style.left = posX + "px";
    astronaut.style.top = posY + "px";
    astronaut.style.transform = `rotate(${rotation}deg)`;
  }

  requestAnimationFrame(moveAstronaut);

  // apply slowdown only when moving
  if (!isBoarding) {
    velX *= 0.9999;
    velY *= 0.9999;
    rotationSpeed *= 0.999;
  }
}

moveAstronaut()


// Dragging
astronaut.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - astronaut.offsetLeft;
  offsetY = e.clientY - astronaut.offsetTop;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  astronaut.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    posX = e.clientX - offsetX;
    posY = e.clientY - offsetY;

    // calculate velocity while dragging (for throw)
    velX = e.clientX - lastMouseX;
    velY = e.clientY - lastMouseY;

    astronaut.style.left = posX + "px";
    astronaut.style.top = posY + "px";
    astronaut.style.transform = `rotate(${rotation}deg)`;

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  astronaut.style.cursor = "grab";

  // adjust rotation speed based on throw strength
  rotationSpeed = Math.min(Math.max((Math.abs(velX) + Math.abs(velY)) / 20, 0.2), 5);
});

// Bonus: astronaut glows when near center of screen
function astronautGlow() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const dx = posX - centerX;
  const dy = posY - centerY;
  const distance = Math.sqrt(dx*dx + dy*dy);

  // closer to center = stronger glow
  const glow = Math.max(0, 1 - distance / (window.innerWidth / 2));
  astronaut.style.filter = `drop-shadow(0 0 ${30 * glow}px rgba(0,200,255,${glow}))`;
  requestAnimationFrame(astronautGlow);
}
astronautGlow();



function launchSequence() {
  const astronaut = document.querySelector(".astronaut");
  const startBtn = document.querySelector(".start-container");

  startBtn.style.display = "none";
  isBoarding = true;

  // Transform
  setTimeout(() => astronaut.classList.add("transformed"), 500);

  // Blast off
  setTimeout(() => astronaut.classList.add("launching"), 2000);

  // Save launch state
  localStorage.setItem("astronautLaunching", "true");

  // Redirect after animation
  setTimeout(() => {
    window.location.href = "landing/landing.html";
  }, 4000);
}

// ===================
// Alien Movement
// ===================





