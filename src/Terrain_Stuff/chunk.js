function Chunk(x,y) {
    //position
    this.x = x;
    this.y = y;

    this.size = 50; //its always a square
    this.tiles = [];
    for (let i = 0; i < this.size; i++) {
        this.tiles[i] = [];
        for (let j = 0; j < this.size; j++) {
            this.tiles[i][j] = new Tile("empty", 0, 0, 0); //for now we will generate an empty plain
        }
    }
}