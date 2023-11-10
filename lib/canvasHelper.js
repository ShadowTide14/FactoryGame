//puts text on a <canvas>, with proper newlines
//c = canvas context
//str = message to display
//(x,y) = position on canvas to display text
function text(str,x,y)  {
    let total = str.split("\n");
    let spacing = Number.parseInt(c.font.split("px")[0]);
    spacing = spacing + Math.floor(spacing/3);
    for (let i = 0; i < total.length; i++) {
        ctx.fillText(total[i],x,y+spacing*i);
    }
}



//adds an event listener to specified element
function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback);
    } else {
        element["on" + eventName] = callback;
    }
}


//helpful drawing functions

function background(col) {
    if (col instanceof Color) {
        fill(ctx, col.r,col.g,col.b,col.a);
        ctx.fillRect(0,0,width,height);
    } else {
        throw new Error("background needs a Color object");
    }
}

function fill(r, g = 0, b = 0, a = 1) {
    //why does this work
    if (r instanceof Color) {
        ctx.fillStyle = "rgb("+r.r+","+r.g+","+r.b+","+r.a+")";
    } else {
        ctx.fillStyle = "rgb("+r+","+g+","+b+","+a+")";
    }
}

function stroke(r,g,b) {
    ctx.strokeStyle= "rgb("+r+","+g+","+b+")";
}

function strokeW(w) {
    ctx.lineWidth= w;
}

function Color(r,g,b,a=1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
}