/// <reference path="./p5.global-mode.d.ts" />
//  Set scale
let scale = 10
//  Set players
let players = 2
//  Bikes array
let bikes = []
//  Positions of bikes
let position = [
    [20, 20],
    [20, 560]
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
        if (bikes[0].lives > 0 && bikes[1].lives > 0) {
            bikes[0].update()
            bikes[0].show()
            bikes[1].update()
            bikes[1].show()
            let lives1 = bikes[0].lives
            let lives2 = bikes[1].lives
            textSize(42);
            textAlign(CENTER, CENTER)
            stroke(51)
            fill(136, 200, 222, 50)
            text(`Lives:${lives1}`, width / 2, 20)
            fill(251, 233, 85, 50)
            text(`Lives:${lives2}`, width / 2, height - 20)
            // Bike collisions with each other
            //  Bike 1
            for (i = 0; i < bikes[1].tail.length; i++) {
                let pos = bikes[1].tail[i]
                let d = dist(bikes[0].x, bikes[0].y, pos.x, pos.y)
                let self = dist(bikes[1].x, bikes[1].y, pos.x, pos.y)
                if (d < 1) {
                    bikes[0].total = 0
                    bikes[0].tail = []
                    bikes[0].lives--
                    bikes[0].x = 20
                    bikes[0].y = 20
                    bikes[0].xspeed = 1
                    bikes[0].yspeed = 0
                    bikes[1].x = 20
                    bikes[1].y = 560
                    bikes[1].xspeed = 1
                    bikes[1].yspeed = 0
                    bikes[1].total = 0
                    bikes[1].tail = []
                } else if (self < 1) {
                    bikes[1].total = 0
                    bikes[1].tail = []
                    bikes[1].lives--
                    bikes[1].x = 20
                    bikes[1].y = 560
                    bikes[1].xspeed = 1
                    bikes[1].yspeed = 0
                    bikes[0].x = 20
                    bikes[0].y = 20
                    bikes[0].xspeed = 1
                    bikes[0].yspeed = 0
                    bikes[0].total = 0
                    bikes[0].tail = []
                }
            }
            //  Bike 2
            for (i = 0; i < bikes[0].tail.length; i++) {
                let pos = bikes[0].tail[i]
                let d = dist(bikes[1].x, bikes[1].y, pos.x, pos.y)
                let self = dist(bikes[0].x, bikes[0].y, pos.x, pos.y)
                if (d < 1) {
                    bikes[1].total = 0
                    bikes[1].tail = []
                    bikes[1].lives--
                    bikes[1].x = 20
                    bikes[1].y = 560
                    bikes[1].xspeed = 1
                    bikes[1].yspeed = 0
                    bikes[0].x = 20
                    bikes[0].y = 20
                    bikes[0].xspeed = 1
                    bikes[0].yspeed = 0
                    bikes[0].total = 0
                    bikes[0].tail = []
                } else if (self < 1) {
                    bikes[1].total = 0
                    bikes[1].tail = []
                    bikes[0].lives--
                    bikes[1].x = 20
                    bikes[1].y = 560
                    bikes[1].xspeed = 1
                    bikes[1].yspeed = 0
                    bikes[0].x = 20
                    bikes[0].y = 20
                    bikes[0].xspeed = 1
                    bikes[0].yspeed = 0
                    bikes[0].total = 0
                    bikes[0].tail = []
                }

            }
        } else {
            if (bikes[0].lives < 1) {
                let win = "GAME OVER! Player 2 Wins!"
                fill("#FBE955")
                textSize(42);
                textAlign(CENTER, CENTER)
                text(win, width / 2, height / 2);;
                noLoop()
            } else if (bikes[1].lives < 1) {
                let win = "GAME OVER! Player 1 Wins!"
                fill("#88C8DE")
                textSize(42);
                textAlign(CENTER, CENTER)
                text(win, width / 2, height / 2);;
                noLoop()
            }
        }
    }
}


//  Listens for pressed keys and changes direction of bike acscordingly
function keyPressed() {

    if (keyCode === UP_ARROW && bikes[1].yspeed != 1) {
        bikes[1].dir(0, -1)
    } else if (keyCode === DOWN_ARROW && bikes[1].yspeed != -1) {
        bikes[1].dir(0, 1)
    } else if (keyCode === LEFT_ARROW && bikes[1].xspeed != 1) {
        bikes[1].dir(-1, 0)
    } else if (keyCode === RIGHT_ARROW && bikes[1].xspeed != -1) {
        bikes[1].dir(1, 0)
    } else if (keyCode === 87 && bikes[0].yspeed != 1) {
        bikes[0].dir(0, -1)
    } else if (keyCode === 83 && bikes[0].yspeed != -1) {
        bikes[0].dir(0, 1)
    } else if (keyCode === 65 && bikes[0].xspeed != 1) {
        bikes[0].dir(-1, 0)
    } else if (keyCode === 68 && bikes[0].xspeed != -1) {
        bikes[0].dir(1, 0)

    }
}