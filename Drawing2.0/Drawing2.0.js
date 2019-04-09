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

/**
* draw : Loops forever; called automatically
* Summarize code that you add
*/


function draw() {
  background(500);
  stroke(0);
  strokeWeight(2);
  //Head
   fill(255, 104, 0);
  point(200, 10);
  line(200, 12, 200, 80);
  ellipse(200, 10, 3, 3);
  arc(200,100,120,120,PI,0);
  
  //Body
  fill(255, 204, 0);
  rect(139, 100, 121, 170);
  rect(139, 270, 121, 20, 10);
  //Eyes
  fill('#222222');
  ellipse(175, 120, 23, 23);
  ellipse(225, 120, 23, 23);
  //Mouth
   fill('red');
  arc(200,140,20,20,0,PI,CHORD);
  //Belly
  fill('#fae');
  strokeWeight(1);
  rect(150, 170, 100, 100);
  triangle(150, 170, 180, 170,150, 200);
  triangle(250, 170, 220, 170,250, 200);
  triangle(150, 270, 180, 270,150, 240);
  triangle(250, 270, 220, 270,250, 240);
  quad(200, 180, 160, 220,200, 260, 240, 220);
  quad(200, 180, 160, 220,200, 260, 240, 220);
  quad(200, 180, 160, 220,200, 260, 240, 220);
  fill('red');
  ellipse(200, 220, 30, 30);
  //Leg     
  strokeWeight(4);
  fill(180, 100, 0);
  rect(160, 290, 30, 15, 9);
  rect(210, 290, 30, 15, 9);
  //Hand
  strokeWeight(5);
  line(139, 150, 100, 189);
  line(260, 150, 280, 189);
  line(100,189, 70,179);
  line(100,189, 70,199);
  line(100,189, 100,219);
  line(280, 189,310,219);
  line(280, 189,280,219);
  line(280, 189,310,189);
  //Custom shape
  noFill();
  strokeWeight(1);
  stroke(255);
  beginShape();
  vertex(149, 70);
  vertex(255, 80);
  vertex(200, 40);
  vertex(200, 100);
  vertex(230, 50);
  endShape(CLOSE);
  
}