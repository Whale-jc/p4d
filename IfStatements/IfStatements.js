/**
* Erika Mesh
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
var Ylocation;
var timefortext;
function setup() {
  createCanvas(400, 400);
  Ylocation=0;
  timefortext=0;
}

function draw() {
  background(220);
  timefortext++;
  
//if for animation
      if(mouseY< height/2){
      rect(0,Ylocation,50,50);
      Ylocation++;
      }
  
//if/else if/else for color changes
    if(mouseX< width/3){
      fill('#fae');
      ellipse(200,200,100,100);
      } 
    else if(mouseX< width/3 + width/3){ 
      fill(color(0, 0, 255));
      ellipse(200,200,100,100); 
      } 
    else{    
      fill(0);
      ellipse(200,200,100,100); 
      }
    textSize(20);
  
//compound condition for text changes
      if((timefortext<100)||(timefortext>300)){
       text("Move mouse~", 100, 30);
      }  
    else{    
      text("You will see color changes.", 100, 30);
      text("Move mouse~", 100, 330);
      }
}