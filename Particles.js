class particle {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 0,
            isStatic:false
        }
        
        this.r = 10;
        this.colour = color(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.circle(x, y, this.r, options);
        
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.colour)
        ellipse(0,0,this.r,this.r);
        pop();
    }

}
