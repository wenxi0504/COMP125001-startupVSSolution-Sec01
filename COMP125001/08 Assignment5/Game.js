// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/Grass.jpg";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Game objects
var monster = {
    delay: 2600
};
var monstersCaught = 0;

var mouseDown = {};

addEventListener("mousedown", function (e) {
    ++monstersCaught;
}, false);

addEventListener("mouseup", function (e) {
    reset();
}, false);

var reset = function () {
    // Throw the monster somewhere on the screen randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
    monster.delay -= 10;
};

function resetScore() {
    monstersCaught = 0;
    monster.delay = 2600;
}

function resetSpeed() {
    monster.delay = 2600;
}

// Draw everything
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Your score: " + monstersCaught, 32, 32);
    ctx.fillText("Your speed: " + monster.delay + " milliseconds", 32, 62);
};
// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;
    if (delta > monster.delay) {
        reset();
        then = now;
    }
    render();
   
    // Request to do this again ASAP
    requestAnimationFrame(main);
};
// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
