//Epic File for all the drawing stuff!!!!!!11!!!!!!1!!!!1!!1!!11!11!

const tileW = 100;

canvasW = canvas.clientWidth;
canvasH = canvas.clientHeight;


function drawGrid(camX_, camY_, camZoom_) {
    for (let x = 0; x < Math.ceil(canvasW / (tileW * camZoom_)); x++) {
        for (let y = 0; y < Math.ceil(canvasH / (tileW * camZoom_)); y++) {
            drawTile(x * tileW + camX_, y * tileW + camY_, tileW);
        }
    }
}

function drawTile(x, y, w, h=w) {
    fill(235, 235, 235);
    stroke(155, 155, 155);
    strokeW(4);
    ctx.strokeRect(x, y, w, h);
}