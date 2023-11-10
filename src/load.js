const canvas = document.getElementById("canvas");
const width = canvas.width = screen.width;
const height = canvas.height = screen.height;
const ctx = canvas.getContext("2d");

let mouseX;
let mouseY;

addEventListener("mousemove", (e) => {mouseX = e.clientX; mouseY = e.clientY;});

let keyboard = null; // when the window initilizes, this is set to a ButtonTracker class

let camX = 0;
let camY = 0;
let camZoom = 1;