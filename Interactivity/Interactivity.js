/**
* Erika Mesh
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
function setup() {
  // 1. Canvas should be 400 pixel wide x 400 pixel tall  
   createCanvas(400, 400);
  // 2. Use any background color you like 
  background(220);
  // 3. Draw lines so they appear like the image   
  //    to the right. There should be 4 lines,  
  //    equally spaced down the canvas. Remember that you 
  //    you can use built in variables and do math to make 
  //    sure the spacing is correct!
  var canvas;
  canvas=400/5;
  line(0,canvas,400,canvas);
  line(0,canvas*2,400,canvas*2);
  line(0,canvas*3,400,canvas*3);
  line(0,canvas*4,400,canvas*4);
}

function draw() {
  // When the c key is pressed, follow the mouse with an ellipse.  
  if(keyIsPressed && key == 'c')  {
    // 4. Follow the mouse with a ellipse of any size.   
    var randomsize= random(0, 200);
ellipse(mouseX,mouseY,randomsize,randomsize);
    //    Be sure all of your ellipse code is within these nested curly brackets.
  } 
// When the e key is pressed, erase the background. 
  if(keyIsPressed && key == 'e')  {
    // 5. "Erase" the background   
  background(220);
  }
  // When the r key is pressed, draw a rectangle.  
  if(keyIsPressed && key == 'r')  {
    // 6. Draw a rectangle from the upper left-corner of canvas    
    //    and whose width is the same as the mouse's X coordinate   
    //    and the height is the mouse's Y coordinate    
    //    It "grows" with the mouse 
    rect(0,0,mouseX,mouseY);
  } 
    // When the s key is pressed, draw a line from the mouse.
    //    to each canvas corner.  
    if(keyIsPressed && key == 's')  { 
      // 7. Draw a line from mouse to each corner of the canvas
  line(0,0,mouseX,mouseY);
  line(0,400,mouseX,mouseY);
  line(400,0,mouseX,mouseY);
  line(400,400,mouseX,mouseY);
    }     
}