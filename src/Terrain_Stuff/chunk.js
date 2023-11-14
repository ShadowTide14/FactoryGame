function Chunk(x,y) {
    //position
    this.x = x;
    this.y = y;

    this.size = 50; //its always a square
    this.tiles = [];
    for (let i = 0; i < this.size; i++) {
        this.tiles[i] = [];
        for (let j = 0; j < this.size; j++) {
            if (noise.simplex2(this.x * 50 + i, this.y * 50 + j) > 0.5) {
                if (Math.random() > 0.5) {
                    this.tiles[i][j] = new Tile("copper", Math.floor(Math.random() * 100), 1000, 0);
                } else {
                    this.tiles[i][j] = new Tile("iron", Math.round(noise.simplex2(this.x * 50 + i, this.y * 50 + j) * 100), 1000, 0);
                }
            } else {
                this.tiles[i][j] = new Tile("empty", 0, 0, 0);
            }
        }
    }
}