class BOX {
    constructor(x,y,width,height){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.width = width;
        this.height = height;
        this.visible = true;
        this.alpha = 255;

        this.body = Bodies.rectangle(x,y,30,50,options);
        World.add(world, this.body);
    }

    update(){
        if (this.body.speed > 3){
            this.visible = false;
        } else {
            this.visible = true;
        }
    }

    display(r,g,b){

        if (this.visible == false){

            while (this.alpha <= 255 && this.alpha != 0){

                this.alpha = this.alpha + 0.04;
                fill(r,g,b,this.alpha);
                strokeWeight(2);
                stroke(255,255,255,this.alpha);
                rectMode(CENTER);
                rect(this.body.position.x,this.body.position.y,this.width,this.height);
            }

            World.remove(world, this.body);


        } else {

            push();
            fill(r,g,b);
            strokeWeight(2);
            stroke(255);
            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop();

        }
    }
}