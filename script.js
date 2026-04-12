// Confirm JS is connected
console.log("script.js connected!");

// Event-driven programming example
let welcomeBtn = document.getElementById("welcome-btn");

if (welcomeBtn) {
  welcomeBtn.addEventListener("click", function () {
    alert("Welcome to the Campus Life App!");
  });
}

// API placeholders (not fully functional yet)

// Events API placeholder
let eventBtn = document.getElementById("fetch-events");

if (eventBtn) {
  eventBtn.addEventListener("click", function () {
    console.log("Fetch events API will go here");
  });
}

// Food API placeholder
let foodBtn = document.getElementById("fetch-food");

if (foodBtn) {
  foodBtn.addEventListener("click", function () {
    console.log("Fetch food API will go here");
  });
}