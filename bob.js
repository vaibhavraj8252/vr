class Bob{
    constructor(x,y,r){
        var bob_features = {
            isStatic : false,
            restitution:1.2,
            friction:1,
            density:2.2}
          this.bob = Bodies.circle(x,y,r/2,bob_features)
          World.add(myWorld,this.bob)
          this.r=r;
          
    }
    display(){
        push ()
        translate (this.bob.position.x,this.bob.position.y)
        rotate (this.bob.angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.r)
        pop ()
        
    }
}