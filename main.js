/// <reference path="./p5.global-mode.d.ts" />


function setup() {
    createCanvas(600, 600)
    bike = new Bike()
}

function draw() {
    background(51)

    bike.update()
    bike.show()
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        bike.dir(0, -1)
    } else if (keyCode === DOWN_ARROW) {
        bike.dir(0, 1)
    } else if (keyCode === LEFT_ARROW) {
        bike.dir(-1, 0)
    } else if (keyCode === RIGHT_ARROW) {
        bike.dir(1, 0)
    }
}