class Bob{

    constructor(x,y,r) {

     

var options= {

isStatic:false,
restitutions:0.1,
friction:0,
frictionAir:0,
slop:1,
inertia:0/1,
density:1.2

}

this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)

    }

    display() {

var paperpos=this.body.position;


  push()
  translate(paperpos.x,paperpos.y);
rectMode(CENTER)

strokeWeight(3);
fill(255,0,255)
ellipse(0,0,this.r,this.r);
pop()




    }

}