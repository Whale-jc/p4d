/**
* Erika Mesh
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var X = 1;
  var Y = 1;
  var ellipsesize=200;
  var Xlocation1=10;
  var Ylocation1=10; 
  var ellipsecolor=255;
  
//Big ellipses loop
  for(var n = 0; n <10; n++)
{
  noFill();
  ellipse(200,200,ellipsesize,ellipsesize);
  ellipsesize=ellipsesize+20;
}
  
//Small ellipses loop
  while( X  <= 40 )
{
  fill(ellipsecolor);
  ellipse(Xlocation1,Ylocation1,10,10);
  X++;
  Xlocation1=Xlocation1+10;  
  Ylocation1=Ylocation1+10;
  ellipsecolor=ellipsecolor-5;
}
  
//Smile 
  fill(255);
  ellipse(200,200,200);
	ellipse(200,200,15);
	ellipse(160,160,20);
	ellipse(240,160,20);
	arc(200,200,110,110,0,PI);
}