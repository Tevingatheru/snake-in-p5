function Food() {

    var mark = 0;
    this.mark = 0;
        
    this.pickLocation = function () {
        var col = floor(width);
        var row = floor(height);
        this.xf = floor(random(40)) * 10;
        this.yf = floor(random(40)) * 10;
    }
       
    this.show = function () {
        
        fill(150, 0, 192);
        stroke(255);
        rect(this.xf, this.yf, tile, tile);

        if (s.eat(this.xf, this.yf)) {
            f.pickLocation();
            this.mark = this.mark + 10;
        }
    }

    this.score = function () {
        return this.mark;
    }
}
