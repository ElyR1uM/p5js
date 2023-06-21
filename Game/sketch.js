let playerImage;
function setup() {
  createCanvas(400, 400);
  playerImage = loadImage("./Assets/playerSprite.png")
}

function draw() {
  image(playerImage, 0, 0)
  background(220);
}