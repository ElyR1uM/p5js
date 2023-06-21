let playerSprite;
let playerX, playerY;

function preload() {
  playerSprite = loadImage('./Assets/playerSprite.png')
}

function setup() {
  playerX = 0;
  playerY = 0;
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(playerSprite, playerX, playerY)
}

function myInput() {
  if (keyIsDown(a)) {
    playerX -= 5;
  }
  if (keyIsDown(d)) {
    playerX += 5;
  }
  if (keyIsDown(w)) {
    playerY += 5;
  }
  if (keyIsDown(s)) {
    playerY -= 5;
  }
}