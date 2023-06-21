/* global p5 */

let playerSprite
let playerX, playerY
let movementState = {
  "idle": 0,
  "walking": 1,
  "running": 2,
}
let speedModifier
function preload() {
  playerSprite = loadImage("./Assets/playerSprite.png")
}

function setup() {
  speedModifier = 0;
  playerX = windowWidth / 4
  playerY = windowHeight / 4
  let canvas = createCanvas(windowWidth / 2, windowHeight / 2)
  canvas.style("display", "block")
  console.log(windowWidth / 2, windowHeight / 2)
}

function draw() {
  background(220)
  image(playerSprite, playerX, playerY)
  handleStates()
  myInput()
}

function handleStates() {
  switch (movementState) {
    case 0:
      speedModifier = 0
      break
    case 1:
      speedModifier = 3
      break
    case 2:
      speedModifier = 5
      break
  }
}

// Register input of the user
function myInput() {

  if (keyIsDown(16)) { // Shift
    movementState = 2
  } else {
    movementState = 1
  }
  if (keyIsDown(65)) { // A
    playerX -= 1 * speedModifier
  }
  if (keyIsDown(68)) { // D
    playerX += 1 * speedModifier
  }
  if (keyIsDown(87)) { // W
    playerY -= 1 * speedModifier
  }
  if (keyIsDown(83)) { // S
    playerY += 1 * speedModifier
  }
}
