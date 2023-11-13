/*
Ok um I guess you could add resource nodes to the game.
They should have a purity of 1-100, a resource stockpile (for how much it has left) and a resource type
(just make iron and copper for now, we’ll worry about the rest later).
Don’t worry about making them naturally generate, I’ll take care of that when I do terrain gen.
*/

/*
resources:
iron: standard miner
copper: standard miner
*/
function Resource() {
    this.type = ""; //determines what you can mine from this node
    this.purity = 100; //determines how fast you can mine the node
    this.amount = 1000; //determines how much you can mine in total from the node
}