function Drone(t = "none") {
    this.type = t;
    this.pos = new Vector2d(0,0);
    this.vel = new Vector2d(0,0);
    this.goal_pos = new Vector2d(0,0);
    this.AI_state = "idle";

    this.draw = () => {
        //shenanigans goes here (danny HELLLLPPPP!!!)
        //fill(0, 0, 0);
        ctx.strokeRect(this.pos.x, this.pos.y, 10, 10);
    };

    this.update = () => {
        if (this.AI_state == "idle") {
            if (this.goal_pos.x == this.pos.x && this.goal_pos.y == this.pos.y) {
                //do nothing, you good bro
            } else {
                //WHAT ARE YOU DOING!!! GET BACK TO WORK!!
                temp = new Vector2d(mouseX, mouseY);
                this.vel = Vector2d.sub(this.goal_pos, this.pos);
                this.vel.mag = 5;
            }
        }

        this.pos.add(this.vel);
        this.vel.mag = 0;

    }
}