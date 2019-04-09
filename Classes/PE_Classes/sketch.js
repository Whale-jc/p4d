var myBall;


function setup() {
    createCanvas(400, 400);
    
    myBall = new Ball();
   // myBall2 = new Ball();



}

function draw() {
  background(220);
  myBall.display();
  myBall.move();
  myBall.bounce();

  
}


