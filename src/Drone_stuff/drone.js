function Drone(t = "none") {
    this.type = t;
    this.pos = {x:0,y:0};
    this.vel = {x:0,y:0};
    this.goal_pos = {x:0,y:0};
    this.AI_state = "idle";

    this.draw = () => {
        //shenanigans goes here (danny HELLLLPPPP!!!)
        //fill(0, 0, 0);
        ctx.strokeRect(this.pos.x, this.pos.y, 20, 10);
    };

    this.update = () => {
        if (this.AI_state == "idle") {
            if (this.goal_pos.x == this.pos.x && this.goal_pos.y == this.pos.y) {
                //do nothing, you good bro
            } else {
                //WHAT ARE YOU DOING!!! GET BACK TO WORK!!
                this.vel.x = (this.goal_pos.x - this.pos.x) * 0.1;
                this.vel.y = (this.goal_pos.y - this.pos.y) * 0.1;
            }
        }

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.vel.x = 0;
        this.vel.y = 0;

    }
}