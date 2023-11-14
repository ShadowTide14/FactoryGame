function Drone(x,y,t = "none") {
    this.type = t;
    this.pos = {x:x,y:y};
    this.vel = {x:0,y:0};
    this.goal_pos = {x:0,y:0};
    this.AI_state = "stay";

    this.draw = () => {
        stroke(0,0,0);
        ctx.strokeRect(this.pos.x + camX, this.pos.y + camY, 20, 20);
    };

    this.update = () => {
        if (this.AI_state == "goToTarget") {
            if (this.goal_pos.x == this.pos.x && this.goal_pos.y == this.pos.y) {
                //do nothing, you good bro
                this.AI_state = "stay"
            } else {
                //WHAT ARE YOU DOING!!! GET BACK TO WORK!!
                this.vel.x = (this.goal_pos.x - this.pos.x) * 0.1;
                this.vel.y = (this.goal_pos.y - this.pos.y) * 0.1;
            }
        } else if (this.AI_state == "stay") {
            //dont move!
        }

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.vel.x = 0;
        this.vel.y = 0;

    }
}