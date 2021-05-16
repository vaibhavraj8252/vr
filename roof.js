class Roof{
    constructor(x,y,w,h){
        var roof_features = {
            isStatic : true,
            restitution:1,
            friction:2,
            }
          this.roof = Bodies.rectangle(x,y,w,h,roof_features)
          World.add(myWorld,this.roof)
          this.w=w;
          this.h=h;
    }
    display(){
        push ()
        fill("grey")
        translate (this.roof.position.x,this.roof.position.y)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop ()
    }
}