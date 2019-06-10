/// <reference path="./p5.global-mode.d.ts" />
//  Set scale
let scale = 10
//  Set players
let players = 2
//  Bikes array
let bikes = []
//  Positions of bikes
let position = [
    [20, 560],
    [20, 20]
]
// Colours of bikes
let color = ["#88C8DE", "#FBE955"]




//  Initial setup
function setup() {
    //  Draw canvas
    createCanvas(600, 600)
    //  Create bike objects depending on players
    for (i = 0; i < players; i++) {
        bikes[i] = new Bike(
            position[i],
            color[i]
        )
    }
    //  Set framerate
    frameRate(15)
}



//  Drawing
function draw() {
    //  set background colour
    background(51)
    // Call bike functions depending on players
    if (players == 2) {
        bikes[0].death()
        bikes[0].update()
        bikes[0].show()
        bikes[1].death()
        bikes[1].update()
        bikes[1].show()
        // Bike collisions with each other
        //  Bike 1
        for (i = 0; i < bikes[1].tail.length; i++) {
            let pos = bikes[1].tail[i]
            let d = dist(bikes[0].x, bikes[0].y, pos.x, pos.y)
            if (d < 1) {
                bikes[0].total = 0
                bikes[0].tail = []
            }
        }
        //  Bike 2
        for (i = 0; i < bikes[0].tail.length; i++) {
            let pos = bikes[0].tail[i]
            let d = dist(bikes[1].x, bikes[1].y, pos.x, pos.y)
            if (d < 1) {
                bikes[1].total = 0
                bikes[1].tail = []
            }
        }
    }


}


//  Listens for pressed keys and changes direction of bike accordingly
function keyPressed() {
    if (keyCode === UP_ARROW && bikes[0].yspeed != 1) {
        bikes[0].dir(0, -1)
    } else if (keyCode === DOWN_ARROW && bikes[0].yspeed != -1) {
        bikes[0].dir(0, 1)
    } else if (keyCode === LEFT_ARROW && bikes[0].xspeed != 1) {
        bikes[0].dir(-1, 0)
    } else if (keyCode === RIGHT_ARROW && bikes[0].xspeed != -1) {
        bikes[0].dir(1, 0)
    } else if (keyCode === 87 && bikes[1].yspeed != 1) {
        bikes[01].dir(0, -1)
    } else if (keyCode === 83 && bikes[1].yspeed != -1) {
        bikes[1].dir(0, 1)
    } else if (keyCode === 65 && bikes[1].xspeed != 1) {
        bikes[1].dir(-1, 0)
    } else if (keyCode === 68 && bikes[1].xspeed != -1) {
        bikes[1].dir(1, 0)
    }
}