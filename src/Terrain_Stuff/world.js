//should handle everything about the world

//uses chunks for world handling


class World {
    constructor(seed) {
        this.name = "";
        this.grid = {};
        this.buildings = {};
        this.drones = [];

        this.seed = seed;
        noise.seed(seed);
    }

    get camChunk() {
        let chunkX = Math.floor(Math.floor(camX/tileW)/50); //50 is the size of a chunk
        let chunkY = Math.floor(Math.floor(camY/tileW)/50);
        return {x:chunkX, y:chunkY};
    }

    update() {
        let temp = this.camChunk;
        if (this.grid[temp.x] == undefined || this.grid[temp.x][temp.y] == undefined) {
            if (this.grid[temp.x] == undefined) {
                this.grid[temp.x] = {};
            }
            this.grid[temp.x][temp.y] = new Chunk(temp.x,temp.y);
            console.log("new chunk created!");
        }
    }

    draw() {
        try {
            let temp = this.grid[this.camChunk.x][this.camChunk.y];
            for (let i = 0; i < temp.tiles.length; i++) {
                for (let j = 0; j < temp.tiles[i].length; j++) {
                    if (temp.tiles[i][j].type == "empty") {
                        fill(255,255,255);
                        ctx.fillRect(i*tileW + camX - (this.camChunk.x + 1) * (50 * tileW), j*tileW + camY - (this.camChunk.y + 1) * (50 * tileW), tileW, tileW);
                    } else if (temp.tiles[i][j].type == "iron") {
                        fill(255, interpolate(temp.tiles[i][j].purity, 0, 100, 255, 0), interpolate(temp.tiles[i][j].purity, 0, 100, 255, 0));
                        ctx.fillRect(i*tileW + camX - (this.camChunk.x + 1) * (50 * tileW), j*tileW + camY - (this.camChunk.y + 1) * (50 * tileW), tileW, tileW);
                    } else if (temp.tiles[i][j].type == "copper") {
                        fill(interpolate(temp.tiles[i][j].purity, 0, 100, 255, 0), 255, interpolate(temp.tiles[i][j].purity, 0, 100, 255, 132));
                        ctx.fillRect(i*tileW + camX - (this.camChunk.x + 1) * (50 * tileW), j*tileW + camY - (this.camChunk.y + 1) * (50 * tileW), tileW, tileW);

                    }
                }
            }
        } catch (error) {
            
        }

        drawGrid(camX,camY,camZoom);

        for (let i = 0; i < this.drones.length; i++) {
            this.drones[i].update();
            this.drones[i].draw();
        }

    }
}