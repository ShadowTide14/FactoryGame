class Menu {
    constructor(ctx,options,hover,triggers,max) {
        this.selector = 0;
        this.options = options;
        this.hover = hover || [];
        this.ctx = ctx;
        this.triggers = triggers || [];
        this.offset = 0;
        this.max = max || this.options.length;
    }
    
    addTrigger(index, callback) {
        this.triggers[index] = callback;
    }
    
    select() {
        if (this.triggers[this.selector] != undefined) {
            this.triggers[this.selector]();
        }
    }
    
    up() {
        this.selector = Math.max(this.selector - 1, 0);
        this.offset -= (this.selector < this.offset) ? 1 : 0;
    }
    
    down() {
        this.selector = Math.min(this.selector + 1, this.options.length - 1);
        this.offset += (this.selector > this.offset + this.max - 1) ? 1 : 0;
    }
    
    show(x,y) {
        let textHeight = Number.parseInt(this.ctx.font.split("px")[0]);
        if (this.offset != 0) {
            text(this.ctx, "^",x,y + textHeight/5 - (textHeight + Math.floor(textHeight/3)));
        }
        if (this.offset != this.options.length - this.max) {
            text(this.ctx, "v",x,y + (textHeight + Math.floor(textHeight/3)) * this.max);
        }
        for (let i = this.offset; i < Math.min(this.max, this.options.length) + this.offset; i++) {
            let mess = this.options[i];
            if (i == this.selector) {
                mess = this.hover[i] || ("# " + this.options[i]);
            }
            //console.log(mess);
            text(this.ctx, mess, x, y + (textHeight + Math.floor(textHeight/3)) * (i - this.offset));
        }
    }
}

//keeps track of all keys that are currently held down
class ButtonTracker {
    static downKeys = {};
    constructor() {
        addEvent(document, "keydown", this._onKeyDown);
        addEvent(document, "keyup", this._onKeyUp);
        addEvent(document, "blur", this._onBlur);
    }

    _onKeyDown(e) {
        e = e || window.event;
        if (ButtonTracker.downKeys[e.key] || false) {
            return;
        }
        ButtonTracker.downKeys[e.key] = true;
    }

    _onKeyUp(e) {
        e = e || window.event
        ButtonTracker.downKeys[e.key] = false;
    }

    isKeyDown(v, isCode) {
        isCode = isCode || false;
        //console.log(v.charCodeAt(0));
        return ButtonTracker.downKeys[v] || false;
    }

    _onBlur() {
        ButtonTracker.downKeys = {};
    }
}

//a sign function
//x>=0 returns 1
//x<0 returns -1
function sign(x) {
    return (x >= 0 ? 1 : -1);
}

function interpolate(value, vMin, vMax, oMin, oMax) {
    return ((value - vMin)/(vMax-vMin))*(oMax-oMin) + oMin;
}