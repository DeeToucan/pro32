class CIRCLE {
    constructor(x,y,raduis){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.raduis = raduis;

        this.body = Bodies.circle(x,y,this.raduis,options);
        World.add(world, this.body);
    }

    display(r,g,b){
        push();
        ellipseMode(CENTER);
        fill(r,g,b);
        strokeWeight(2);
        stroke(255);
        ellipse(this.body.position.x,this.body.position.y,this.raduis * 2);
        pop();
    }
}