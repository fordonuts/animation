let radius = 60;         
let sizeStep = 1.5;       
let minRadius = 25;      
let maxRadius = 150;     
let isExpanding = true;  
let isPaused = true;    

// Center
let centerX = 300;
let centerY = 210;

function setup() {
  createCanvas(600, 420);
}

function draw() {
  background(235, 245, 250); // background

  // Update radius using arithmetic when not paused
  if (!isPaused) {
    if (isExpanding) {
      radius += sizeStep; // Increase radius while expanding
      if (radius >= maxRadius) {
        radius = maxRadius;
        isExpanding = false; // Switch to shrinking 
      }
    } else {
      radius -= sizeStep; // Decrease radius while shrinking
      if (radius <= minRadius) {
        radius = minRadius;
        isExpanding = true; // Switch back to expanding
      }
    }
  }


  // Convert radius to diameter (d = 2 * r)
  let diameter = radius * 2;

  // Draw the circle at the center
  fill(320, 130, 210);
  stroke(30, 60, 110);
  strokeWeight(2);
  circle(centerX, centerY, diameter);

  
  drawInfo(diameter);
}


function drawInfo(currentDiameter) {
  fill(25);
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);


  text("Controls: Press [SPACE] or [Click Canvas] to Pause / Continue", 15, 15);

  let modeText = isPaused ? "PAUSED" : (isExpanding ? "EXPANDING" : "SHRINKING");
  text(Status: ${modeText}   |   Radius (r): ${radius.toFixed(1)}px   |   Diameter (d): ${currentDiameter.toFixed(1)}px, 15, 38);
}

function keyPressed() {
  if (key === ' ') {
    isPaused = !isPaused;
  }
}

function mousePressed() {
  isPaused = !isPaused;
}
