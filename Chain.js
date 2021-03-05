class Chain{
    
        constructor(body1,body2,offsetX,offsetY){
            this.offsetX = this.offsetX
            this.offsetY = this.offsetY
            var options={
                bodyA:body1,
                bodyB:body2,
                pointB:{x:this.offsetX,y:this.offsetY}
            }
            this.chain=Constraint.create(options)
            World.add(world,this.chain)
        }
    
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(2);

        var Anchor2X = pointB.x+this.offsetX
        var Anchor2Y = pointB.y+this.offsetY

        line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    }
    }
    