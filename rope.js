class Rope{

    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA:body1,
            bodyb:body2,
            pointB:{X:this.offsetX,Y:this.offsetY}


            
        }

        this.Rope=Constraint.create(options);
        World.add(world,this.Rope)

        
    }

    display(){

        

        var pointA=this.Rope.bodyA.position
        var pointB=this.Rope.bodyB.position
        strokeWeight(2);
        
        var Anchor1X=pointA.x
        var Anchor1y=pointB.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

        line(Anchor1X,Anchor1y,Anchor2X,Anchor2Y);
    }

}