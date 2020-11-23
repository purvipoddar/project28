class Mango{
        constructor(x,y,r){
            var options={
                isStatic:true,
                restituion:0.3,
                friction:0.5,
    
            }
            this.x = x
            this.y = y
            this.r = r
            this.image = loadImage("sprites/mango.png");
            this.body = Bodies.circle(this.x,this.y,this.r,options);
            World.add(world,this.body);
        }
        display(){
            var pos = this.body.position;
             push();
             translate(pos.x, pos.y)
             rotate(this.body.angle)
            strokeWeight = 1
            imageMode(CENTER);
            ellipseMode(CENTER);
            image(this.image,0,0,this.r*2,this.r*2)
            pop();
        }
    }