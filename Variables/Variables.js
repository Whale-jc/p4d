/**
* Erika Mesh
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
var xsize;
  var j;
  var x;
  var y;
  var xLocation;
var yLocation;
var xLocation2;

function setup() {
  createCanvas(500, 500);
  xsize=0;
  y=0;
  x=0;
  j=0;
  xLocation=0;
  yLocation=0;
  xLocation2=500-50;
}

function draw() {
  background(220);
  fill(0+j, 0, 0);
  ellipse(250,250,xsize,xsize);
  fill(0, 144, 180);
  rect(xLocation+x,yLocation+y,50,50);
  rect(xLocation2-x,yLocation+y,50,50);
  xsize++; 
  j++;
  x++;
  y++;
}