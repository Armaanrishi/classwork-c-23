class Ball{
    constructor(x,y,r){
        var ball_options={
            restitution: 1.0, 
            friction:0.5,
            density:2
          
          }
          this.r=r
          this.body=Bodies.circle(x,y,r,ball_options);
              World.add(world,this.body);    
    }
    display(){
        var angle=this.body.angle
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (angle)
        ellipseMode(RADIUS)
        ellipse (0,0,this.r,this.r)
        pop ()
     }

}