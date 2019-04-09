/**
* Yourfirstand Lastname
* IGME-609: Assignment Name, m/d/18
* Summarization of sketch activity
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
var height;
var locationY;

//setup
function setup() {
  createCanvas(600,750);
  
//setup Variables
  height=300;
  locationY=750;
}

//draw
function draw() {
  rectmove();
  underline();
  shape();
  aboveline();
  
//set height decreases
  height--;
  locationY--;
}

//background and shapes in the background
function shape() {
  noStroke();
  fill(253,129,2);
  beginShape();
  vertex(320,0);
  vertex(600,350);
  vertex(600,700);
  vertex(0,0);
  endShape(CLOSE);
  
  fill(253,81,5);
  ellipse(110,140,460,460);
  
  fill(175,48,133);
  ellipse(500,80,300,300);
  
  fill(247,212,76);
  ellipse(104,650,300,300);
  
  fill(71,44,167);
  beginShape();
  vertex(0,324);
  vertex(125,292);
  vertex(231,353);
  vertex(263,471);
  vertex(201,577);
  vertex(83,609);
  vertex(83,609);
  vertex(0,548);
  endShape(CLOSE);
  
  fill(195,215,230);
  ellipse(427,431,160,259);
  }

//The gray rectangle move
function rectmove() {
  background(252,188,166);
  noStroke();
  fill(147);
  rect(600-frameCount,locationY,50,height);
}

//the line under the shapes
function underline(){
  strokeWeight(20);
  stroke(51);
  noFill();
  strokeWeight(10);
  curve(55, 76,55, 76,mouseX,mouseY,600,750, 600,750);
  curve(590,650, 590,650,mouseX,mouseY,600,750, 600,750);
  curve(100,550,100,550,mouseX,mouseY,600,750, 600,750);
  curve(500,100,500,100,mouseX,mouseY,600,750, 600,750);  
}

//the line above the shaps
function aboveline(){
  strokeWeight(20);
  stroke(255);
  noFill();
  strokeWeight(20);
  curve(0, 0,0, 0,mouseX,mouseY,600,750, 600,750);
  curve(600,700, 600,700,mouseX,mouseY,600,750, 600,750);
  curve(0,550,0,550,mouseX,mouseY,600,750, 600,750);
  curve(600,50,600,50,mouseX,mouseY,600,750, 600,750);  
}
 
