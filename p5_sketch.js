
// particle system for flow field

var particles = []
var scl = 20 // ratio of size of vector to cell
var step = 0.01 //increment for xOff and yOff to change to for perlin noise 
var col;
var row;


function setup() {
    myCanvas = createCanvas (windowWidth, windowHeight);
    myCanvas.parent ("myHeader")
    cols = floor(width/scl)
    rows = floor(height/scl )
} 