let mainLoop = false;

let drones = [];

window.onload = () => {
    init();
}

function init() {
    //starts on window.onload
    mainLoop = true;
    keyboard = new ButtonTracker();

    for (let i = 0; i < 3; i++) {
        drones[i] = new Drone();
    }

    //once the player clicks on the window it automatically goes fullscreen
    const options = {
        get once() {
            return true;
        }
    }
    addEventListener("mousedown", (event) => {canvas.requestFullscreen();}, options);
}

function tick() {
    //put the tick events here
    if (mainLoop) { //don't start until the window has actually finished loading

        for (let i = 0; i < drones.length; i++) {
            //drones[i].goal_pos.x = mouseX;
            //drones[i].goal_pos.y = mouseY;
        }

        if (keyboard.isKeyDown("w")) {
            camY += 3;
        }
        if (keyboard.isKeyDown("s")) {
            camY -= 3;
        }
        if (keyboard.isKeyDown("a")) {
            camX += 3;
        }
        if (keyboard.isKeyDown("d")) {
            camX -= 3;
        }

        background(new Color(200,200,200));
        drawGrid(camX,camY,camZoom);

        for (let i = 0; i < drones.length; i++) {
            drones[i].update();
            drones[i].draw();
        }
    }
}

function render() {

}