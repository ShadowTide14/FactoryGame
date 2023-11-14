/*
Ok um I guess you could add resource nodes to the game.
They should have a purity of 1-100, a resource stockpile (for how much it has left) and a resource type
(just make iron and copper for now, we’ll worry about the rest later).
Don’t worry about making them naturally generate, I’ll take care of that when I do terrain gen.
*/

/*
tile types:
iron, copper
empty
water
*/
function Tile(t = "empty", p = 100, a = 1000, h = 0) {
    this.type = t; //determines what you can mine from this node
    this.purity = p; //determines how fast you can mine the node
    this.amount = a; //determines how much you can mine in total from the node
    this.height = h; //ranges from -10 to 10 (or smth?)
}