/* global p5 */
import("../Lib/addons/p5.easycam.js")

let box
let playerPosition
let playerCam
let movementState = {
  "idle": 0,
  "walking": 1,
  "running": 2,
}
let speedModifier
function preload() {
}

function setup() {
  angleMode(DEGREES)
  playerPosition = createVector(0, 0, 0)
  let canvas = createCanvas(windowWidth / 2, windowHeight * 0.99, WEBGL)
  canvas.style("display", "block")
  //requestPointerLock()
  playerCam = createCamera()
  speedModifier = 0;
  normalMaterial()
}

function draw() {
  background(220)
  box = box(0, 0, 0)
  HandleStates()
  MyInput()
  MovePlayer()
  //console.log(playerPosition.x, playerPosition.y, playerPosition.z)
}

function MovePlayer() {
  playerCam.setPosition(playerPosition.x, playerPosition.y, playerPosition.z) // Set the position of the Player in world space
}

function HandleStates() {
  switch (movementState) {
    case 0:
      speedModifier = 0
      break
    case 1:
      speedModifier = 3
      break
    case 2:
      speedModifier = 7
      break
  }
}

// Register input of the user
function MyInput() {

  if (keyIsDown(16)) { // Shift
    movementState = 2
  } else {
    movementState = 1
  }
  if (keyIsDown(65)) { // A
    playerPosition.x -= 1 * speedModifier
  }
  if (keyIsDown(68)) { // D
    playerPosition.x += 1 * speedModifier
  }
  if (keyIsDown(87)) { // W
    playerPosition.y -= 1 * speedModifier
  }
  if (keyIsDown(83)) { // S
    playerPosition.y += 1 * speedModifier
  }
}
