//Jingyu Cao
//IGME-609 Homework3
//Conditionals and Loops
//February 26, 2019

//variables
var Xlocation=100;
var Ylocation=100;

var allcolor=0;

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220);
  
//mouse interaction
  ellipse(mouseX,mouseY,20,20);// use mouseX and mouseY to control the location.
  ellipse(0,0,mouseX,mouseY);// use mouseX and mouseY to control the size.
  
//a loop to draw three rectangles
  var rectsize=100;
var size=10;
  for(var n = 0; n < 3; n++) {
  noFill(); 
  rect(100, 200,rectsize,rectsize);
  rectsize=rectsize-size;
  }
//three interactive way with keyboard
  threekey();
  
//two mouse interactions
  mousepress();  
}


//keyboard input function
function threekey(){
  //"a" to draw a ellipse to move to right
  if(keyIsPressed && key == 'a')  {    
  ellipse(Xlocation,Ylocation,100,100); 
  Xlocation++;
  }
  //"b" to let all shape fill black
  if(keyIsPressed && key == 'b')  {
  fill(allcolor);
  ellipse(Xlocation,Ylocation,100,100);
  }
  //"c" to draw a ellipse to move down
  if(keyIsPressed && key == 'c')  { 
  ellipse(Xlocation,Ylocation,100,100); 
  Ylocation++;
  }
}

//mouse interaction function
function mousepress(){
  //check the mouse is pressed
  if (mouseIsPressed) {
    //check left button of mouse id pressed
    if (mouseButton === LEFT) {
      ellipse(200, 200, 100, 100); //draw a ellipse
    }
     //check left button of mouse id pressed
    if (mouseButton === CENTER) {
      triangle(230, 250, 300, 200, 340, 356);//draw a triangle
    }
 }
}