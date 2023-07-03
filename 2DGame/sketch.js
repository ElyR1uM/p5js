import("../Lib/p5.js")

let playerSprite
let player
let playerPos = [
  x = 0,
  y = 0]
let movementState = {
  "idle": 0,
  "walking": 1,
  "running": 2,
}
let speedModifier

function preload() {
    playerSprite = loadImage("./Assets/PlayerSprite.png")
}

function setup() {
    let canvas = createCanvas(windowWidth / 2, windowHeight / 2, WEBGL)
    canvas.style("display", "block")
}

function draw() {
    background(30)
    player = image(playerSprite, playerPos[0], playerPos[1])
    MyInput()
    HandleStates()
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
        speedModifier = 5
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
    if (keyIsDown(65) || keyIsDown(68) || keyIsDown(87) || keyIsDown(83)) {
      if (keyIsDown(65)) { // A
        playerPos[0] -= speedModifier
      }
      if (keyIsDown(68)) { // D
        playerPos[0] += speedModifier
      }
      if (keyIsDown(87)) { // W
        playerPos[1] -= speedModifier
      }
      if (keyIsDown(83)) { // S
        playerPos[1] += speedModifier
      }
    }
  }
  