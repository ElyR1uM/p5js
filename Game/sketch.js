/* global p5 */
import("../Lib/p5.js") // Import p5 library

let playerSprite
let playerX, playerY
function preload() {
  playerSprite = loadImage("./Assets/playerSprite.png")
}

function setup() {
  playerX = 0;
  playerY = 0;
  createCanvas(400, 400)
}

function draw() {
  background(220)
  image(playerSprite, playerX, playerY)
  myInput()
}

function myInput() {
  if (keyIsDown()) {
    console.log("a")
    playerX -= 5
  }
  if (keyIsDown()) {
    playerX += 5
  }
  if (keyIsDown()) {
    playerY += 5
  }
  if (keyIsDown()) {
    playerY -= 5
  }
}
