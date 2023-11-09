

let mainLoop;

window.onload = () => {
    init();
}

function init() {
    //starts on window.onload
    mainLoop = true;
}

function tick() {
    //put the tick events here
    if (mainLoop) { //don't start until the window has actually finished loading
        background(ctx, new Color(200,200,200));
        
    }
}

function render() {

}