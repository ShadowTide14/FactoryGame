let mainLoop = false;

let drones = [];

window.onload = () => {
    init();
}

function init() {
    //starts on window.onload
    mainLoop = true;

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
            drones[i].goal_pos = {x:mouseX, y:mouseY};
        }

        background(new Color(200,200,200));
        drawGrid(0,0,1);

        for (let i = 0; i < drones.length; i++) {
            drones[i].update();
            drones[i].draw();
        }
    }
}

function render() {

}