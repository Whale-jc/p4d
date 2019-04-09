/**
* Erika Mesh
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
function setup() {
  createCanvas(800, 600);
  background(220);
}

function draw() {
var numberOfRectangles = 1;
var rectsize=10;
var rectlocation=0;
var ellipsesize=200;
var rectcolor=25;  
var ellipsecolor=255;
while( numberOfRectangles  <= 20 )
{
  fill(rectcolor);
  rect(rectlocation,rectlocation,rectsize,rectsize);
  numberOfRectangles++;
  rectlocation=rectlocation+10;
  rectsize=rectsize+15;
  rectcolor=rectcolor+10;
  
}
  
  for(var n = 0; n < 10; n++)
{
  fill(ellipsecolor);
  ellipse(600, 300,ellipsesize,ellipsesize);
  ellipsesize=ellipsesize-20;
  ellipsecolor=ellipsecolor-20;
}

}