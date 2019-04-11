var BubbleObjects=[];

function setup() {
    createCanvas(400, 400);
    
for(var i = 0; i < 100; i++)
{
BubbleObjects[i] = new Bubble();
}

}

function draw() {
background('#fae');
for(var i = 0; i < 100; i++)
{
BubbleObjects[i].rise();
BubbleObjects[i].display();
}
  
}


