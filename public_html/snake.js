function Snake() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.total = 0;
    this.tail = [];

    //conditions for gameover
    this.gameOver = function () {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var posd = dist(this.x, this.y, pos.x, pos.y);
            if (posd < 1) {
                s = new Snake();
                f.pickLocation();
                f.mark = 0;
            }
        }
    }
    // eat food
    this.eat = function (posx, posy) {
        var d = dist(this.x, this.y, posx, posy);
        if (d <= 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }
    //  direction of movement
    this.dir = function (x, y) {
        this.vx = x;
        this.vy = y;
    }
    // update frames
    this.update = function () {

        if (this.total == this.tail.length) {
            for (var i = 0; i < this.tail.length; i++) {
                this.tail[i] = this.tail[i + 1];
            }
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);
        this.x = this.x + this.vx * tile;
        this.y = this.y + this.vy * tile;

        if (this.x == -tile) {
            this.x = width - tile;
        } else if (this.x == width) {
            this.x = 0;
        } else if (this.y == -tile) {
            this.y = height - tile;
        } else if (this.y == height) {
            this.y = 0;
        }
    }
    //color and shape of objects
    this.show = function () {
        fill(255);
        noStroke();
        rect(this.x, this.y, 10, 10);
        for (var i = 0; i < this.tail.length; i++) {
            fill(255, 100);
            rect(this.tail[i].x, this.tail[i].y, 10, 10);
        }
    }

}

//set events to keys 
function keyPressed() {
    switch (keyCode) {
        case 65:
            s.total++;
            break;
        case 32:
            s = new Snake();
            f.pickLocation();
            break;
        case 80:
            s.dir(0, 0);
            break;
        case 37:
            s.dir(-1, 0);
            break;
        case 38:
            s.dir(0, -1);
            break;
        case 39:
            s.dir(1, 0);
            break;
        case 40:
            s.dir(0, 1);
            break;
    }
}
