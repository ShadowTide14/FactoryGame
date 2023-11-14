let mainLoop = false;

let drones = [];

//world seeds must be an integer within this range: 1 to 65536
//or a float between 0 and 1
let world = new World(1);


async function loadFonts() {
    const linjaFont = new FontFace("myFont", "url(https://lipamanka.gay/linjalipamanka-normal.otf)");
    await linjaFont.load();

    document.fonts.add(linjaFont);
}

window.onload = () => {
    loadFonts().then(() => {init();});
}

function init() {
    //starts on window.onload
    mainLoop = true;
    keyboard = new ButtonTracker();

    

    for (let i = 0; i < 3; i++) {
        world.drones[i] = new Drone((Math.random()*2 - 1) * 100,(Math.random()*2 - 1) * 100,);
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

        world.update();
        for (let i = 0; i < drones.length; i++) {
            //drones[i].goal_pos.x = mouseX;
            //drones[i].goal_pos.y = mouseY;
        }

        //camera controlls
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

        world.draw();

        fill(0,0,0);
        ctx.font = "40px monospace";
        text("camPos:" + camX + "," + camY, 0,40);
        text("camChunk:" + world.camChunk.x + "," + world.camChunk.y, 0, 85);
    }
}

function render() {

}