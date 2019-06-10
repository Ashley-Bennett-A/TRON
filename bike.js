//  Create bike class
class Bike {
    //  Taking position and color as parameters
    constructor(xy, color) {
        //  Initial position
        this.x = xy[0];
        this.y = xy[1];
        //  Direction
        this.xspeed = 1;
        this.yspeed = 0;
        //  Size
        this.total = 0;
        this.tail = []

        this.color = color
        this.lives = 3

        //  On self kill
        this.death = () => {
            for (i = 0; i < this.tail.length; i++) {
                //  Checks if head position intersects tail
                let pos = this.tail[i]
                let d = dist(this.x, this.y, pos.x, pos.y)
                if (d < 1) {
                    //  Resets
                    this.total = 0
                    this.tail = []
                }
            }
        }

        this.update = () => {
            //  Increases in size per tick
            this.total++
            //  Draws tail in position
            this.tail[this.total - 1] = createVector(this.x, this.y)
            //  Moves depending on x and y
            this.x = this.x + this.xspeed * scale
            this.y = this.y + this.yspeed * scale
            // Keeps bike in boundaries
            this.x = constrain(this.x, 0, width - scale)
            this.y = constrain(this.y, 0, height - scale)
        }

        this.show = () => {
            // Creates rectangles of the given colour
            fill(this.color)
            stroke(0, 0, 0, 0)
            for (i = 0; i < this.total; i++) {
                rect(this.tail[i].x, this.tail[i].y, scale, scale)
            }
            rect(this.x, this.y, scale, scale)
        }

        this.dir = (x, y) => {
            //  Sets heading depending on key press
            this.xspeed = x
            this.yspeed = y
        }
    }
}