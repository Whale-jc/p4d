class Ball
{
    constructor()
    {
        this.x = 50;
        this.y = 200;
        this.size = 50;
        this.speed = 2;
    }

    move()
    {
        this.x = this.x + this.speed;
    }
    bounce()
    {

       if(this.x+this.size/2 > width)
       {
         this.speed=-this.speed;
       }

       if(this.x-this.size/2<0)
       {
         this.speed=-this.speed;
        }
    }
    
    display()
    { 
        fill(0, 0, 255, 50);
        noStroke();
       ellipse(this.x, this.y, this.size, this.size);
    }
}
