import("../Lib/p5.js")

let playerSprite

function preload() {
    playerSprite = loadImage("Assets/PlayerSprite.png")
}

function setup() {
    let canvas = createCanvas(windowWidth / 2, windowHeight / 2, WEBGL)
    canvas.style("display", "block")
}

function draw() {
    background(220)
    image(playerSprite, windowWidth / 4, windowHeight / 4)
}