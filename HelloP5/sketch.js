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
  background(220);
  line(20,20,20,100);//H left
line(60,20,60,100);//H Right
	line(20,60,60,60);//H Middle
	line(80,20,80,100);//I
	
	ellipse(200,200,200);//Face
	ellipse(200,200,15);//Nose
	ellipse(160,160,20);//Left Eye
	ellipse(240,160,20);//Right Eye
	arc(200,200,110,110,0,PI);//Mouth
}

 