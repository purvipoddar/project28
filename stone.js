class Stone{
  constructor(x,y,r){
    var options={
      isStatic:false,
      density:1.2,
      restituion:0.3,
      friction:0.5,

  }
    this.x=x;
    this.y=y;
    this.r=r;
    this.width=20;
    this.height=20;
        
    this.image=loadImage("sprites/stone.png")
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
      }
      display(){
          var pos = this.body.position;
          push();
          translate(pos.x,pos.y)
          strokeWeight = 1
          imageMode(CENTER)
          ellipseMode(RADIUS);
          // ellipse(pos.x,pos.y,20);         
          image(this.image,0,0,this.r*2,this.r*2); 
          
          pop();
      }
}