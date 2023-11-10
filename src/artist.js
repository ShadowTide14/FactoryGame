//Epic File for all the drawing stuff!!!!!!11!!!!!!1!!!!1!!1!!11!11!

const tileW = 100;

canvasW = canvas.clientWidth;
canvasH = canvas.clientHeight;


function drawGrid(camX_, camY_, camZoom_) {
    for (let x = Math.floor(-camX_/tileW); x < 1 + Math.floor(-camX_/tileW) + Math.ceil(canvasW / (tileW * camZoom_)); x++) {
        for (let y = Math.floor(-camY_/tileW); y < 1 + Math.floor(-camY_/tileW) + Math.ceil(canvasH / (tileW * camZoom_)); y++) {
            drawTile(x * tileW + camX_, y * tileW + camY_, tileW);
        }
    }
}

function drawTile(x, y, w, h=w) {
    let xdif = mouseX - (x + w/2);
    let ydif = mouseY - (y + h/2);
    let dist = Math.sqrt(xdif*xdif + ydif*ydif);
    //fill(235 * (dist / (w*2)), 235 * (dist / (w*2)), 235 * (dist / (w*2)));
    stroke(155, 155, 155,(w*w/(Math.pow(dist,2)+w*w)));
    strokeW(4);
    ctx.strokeRect(x, y, w, h);
}