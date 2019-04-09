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
  fill(252,205,218); 
}

function draw() {
  background(252,205,218);
  strokeWeight(0);
  drawHairback();
  drawNeck();
  drawBody();
  drawEar();
  drawHead();
  drawEyes();
  drawEyebrow();
  drawMouth();
  drawNose();
  drawBlush();
  drawHaifront();
}
 function drawHairback()
{
  fill(45,21,18);
  strokeWeight(1);
  beginShape();
  curveVertex(200,290);
  curveVertex(200,290);
  curveVertex(200,400);
  curveVertex(40,360);
  curveVertex(60,290);
  curveVertex(30,230);
  curveVertex(70,180);
  curveVertex(90,150);
  curveVertex(100,100);
  curveVertex(200,50);
  curveVertex(300,100);
  curveVertex(320,150);
  curveVertex(350,200);
  curveVertex(330,250);
  curveVertex(360,340);
  curveVertex(290,400);
  curveVertex(200,270);
  curveVertex(200,270);
  endShape();

}
function drawNeck()
{
  
  strokeWeight(0);
  fill(234,201,199);
  rect(170,230,60,160,20);
  triangle(200,230,150,300,250,300);
}
  
function drawBody()
{  
  fill(50);
  rect(100,300,200,300,40);
  strokeWeight(4);
  stroke(255);
  line(130,302,130,400);
  line(210,302,210,400);
  line(150,302,150,400);
  line(230,302,230,400);
  line(170,302,170,400);
  line(250,302,250,400);
  line(190,302,190,400);
  line(270,302,270,400);
}  
function drawEar()
{
  strokeWeight(0);
  fill(244,199,195);
  ellipse(110,180,35,55);
  ellipse(290,180,35,55);
}

 function drawHead()
{
  strokeWeight(0);
  fill(249,216,212);
  ellipse(200,165,180,200);
} 
  function drawEyes()
{
  fill(255,255,255);
  ellipse(235,170,35,29);
  ellipse(164,170,35,29);
  fill(0,0,0);
  ellipse(232,169,23,23);
  ellipse(166,169,23,23);
  fill(255,255,255);
  ellipse(237,167,10,8);
  ellipse(170,167,10,8);
  strokeWeight(2);
  stroke(0);
  noFill();
  arc(237,165,30,22,PI,0,OPEN);
  arc(161,165,30,22,PI,0,OPEN);
}
 function drawEyebrow()
{
  strokeWeight(0);
  fill(63,45,38);
  quad(260,135,250,130,210,135,210,140);
  beginShape();
  vertex(180,140);
  vertex(180,135);
  vertex(138,130);
  vertex(130,135);
  endShape(CLOSE);
}  
   function drawMouth()
{
  fill(229,152,149);
  arc(200,221,50,40,0,PI,OPEN);
  stroke(255);
  strokeWeight(7);
  noFill();
  arc(200,210,60,30,0.2*PI,0.8*PI,OPEN);
}  
 function drawNose()
{
  strokeWeight(0);
  fill(244,199,195);
  ellipse(200,200,10,8);
}  
   function drawBlush()
{
  ellipse(150,200,20,10);
  ellipse(260,200,20,10);
}  
   function drawHaifront()
{
  noFill();
  strokeWeight(4);
  stroke(45,21,18);
  fill(45,21,18);
  beginShape();
  curveVertex(200,53); 
  curveVertex(200,53);
  curveVertex(250,70);
  curveVertex(300,120); 
  curveVertex(200,96);
  curveVertex(100,120); 
  curveVertex(150,70);
  curveVertex(200,53); 
  curveVertex(200,53);
  endShape();
  
  strokeWeight(30);
  noFill();
  beginShape();
  curveVertex(266,95); 
  curveVertex(266,95);
  curveVertex(250,100);
  curveVertex(285,150); 
  curveVertex(270,200);
  curveVertex(300,300); 
  curveVertex(300,370);
  endShape();
  
  beginShape();
  curveVertex(170,80); 
  curveVertex(170,80);
  curveVertex(150,100);
  curveVertex(115,150); 
  curveVertex(130,200);
  curveVertex(100,300); 
  curveVertex(100,370);
  endShape();
  
  stroke(29,20,20);
  strokeWeight(10);
  beginShape();
  curveVertex(103,161); 
  curveVertex(103,161); 
  curveVertex(130,200);
  curveVertex(100,220); 
  curveVertex(120,260);
  curveVertex(90,330);
  curveVertex(120,350);
  curveVertex(120,350);
  endShape();
  
  beginShape();
  curveVertex(297,161); 
  curveVertex(297,161); 
  curveVertex(290,190);
  curveVertex(310,220); 
  curveVertex(270,260);
  curveVertex(310,330);
  curveVertex(280,390);
  curveVertex(280,390);
  endShape();

}