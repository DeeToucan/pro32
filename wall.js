class WALL {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        var red,green,blue;

        this.options = {
            isStatic: true
        }

        this.bdy = Bodies.rectangle(this.x,this.y,this.width,this.height,this.options);
        World.add(world, this.bdy);
        
    }

    

    display(r,g,b){

        push();
        rectMode(CENTER);
        fill(r,g,b);
        noStroke();
        rect(this.x,this.y,this.width,this.height);
        pop();

        
    }
}