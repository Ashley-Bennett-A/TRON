function Bike(xy, color) {
    this.x = xy[0];
    this.y = xy[1];
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = []
    this.color = color


    this.death = () => {
        for (i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i]
            let d = dist(this.x, this.y, pos.x, pos.y)
            if (d < 1) {
                this.total = 0
                this.tail = []
            }
        }
    }

    this.update = () => {

        this.total++
        this.tail[this.total - 1] = createVector(this.x, this.y)



        this.x = this.x + this.xspeed * scale
        this.y = this.y + this.yspeed * scale
        this.x = constrain(this.x, 0, width - scale)
        this.y = constrain(this.y, 0, height - scale)
    }

    this.show = () => {
        fill(this.color)
        for (i = 0; i < this.total; i++) {
            rect(this.tail[i].x, this.tail[i].y, scale, scale)
        }
        rect(this.x, this.y, scale, scale)
    }

    this.dir = (x, y) => {
        this.xspeed = x
        this.yspeed = y
    }

}