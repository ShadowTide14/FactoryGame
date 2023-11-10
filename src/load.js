const canvas = document.getElementById("canvas");
const width = canvas.width = screen.width;
const height = canvas.height = screen.height;
const ctx = canvas.getContext("2d");

let mouseX;
let mouseY;

addEventListener("mousemove", (e) => {mouseX = e.clientX; mouseY = e.clientY;})