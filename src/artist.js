//Epic File for all the drawing stuff!!!!!!11!!!!!!1!!!!1!!1!!11!11!

const tileW = 50;

canvasW = canvas.clientWidth;
canvasH = canvas.clientHeight;


function drawGrid(camX, camY, camZoom) {
    for (let x = 0; x < Math.ceil(canvasW / (tileW * camZoom)); x++) {
        for (let y = 0; y < Math.ceil(canvasH / (tileW * camZoom)); y++) {
            drawTile();
        }
    }
}

function drawTile() {

}