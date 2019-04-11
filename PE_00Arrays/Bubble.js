class Bubble
{
    constructor()
    {
        this.x=random(0, 400);
        this.y=random(0, 400);
        this.s=random(0,80);
        this.a=random(0,255);
    }

    rise()
    {
        this.y--;
      // Wrap the bubble
        // If bubble hits bottom of canvas, wrap it back to the buttom
        if(this.y <0)
        {
           this.y = 400;
        }
        
    }
    
    display()
    {
      noStroke();
      fill(200,50,100,this.a);
      ellipse(this.x,this.y,this.s,this.s);
    }

}
