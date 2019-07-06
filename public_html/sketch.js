var s;
var tile = 10;
var f;
var k;
var m;

function setup() {
    createCanvas(400, 400);
    f = new Food();
    s = new Snake();
    f.pickLocation();
    frameRate(10);
}

function draw() {
    background(51);
    s.update();
    s.show();
    f.show();
    s.gameOver();
    noStroke();
    fill(210, 160, 35);
    text("score : " + f.score(), 300, 15);
}
