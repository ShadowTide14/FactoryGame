class Vector2d {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    
    add(other) {
        if (other instanceof Vector2d) {
            this.x += other.x;
            this.y += other.y;
        }
    }
    
    sub(other) {
        if (other instanceof Vector2d) {
            this.x -= other.x;
            this.y -= other.y;
        }
    }
    
    mult(scal) {
        this.x = this.x * scal;
        this.y = this.y * scal;
    }
    
    static dot(a, b) {
        if (a instanceof Vector2d && b instanceof Vector2d) {
            return (a.x * b.x) + (a.y * b.y);
        }
    }
    
    get mag() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    
    set mag(n) {
        this.x = n * Math.cos(this.dir);
        this.y = n * Math.sin(this.dir);
    }
    
    get dir() {
        return Math.atan(this.y / this.x);
    }
    
    //in radians
    set dir(n) {
        let temp = this.mag;
        this.x = this.mag * Math.cos(n);
        this.y = this.mag * Math.sin(n);
    }
    
    copy() {
        return new Vector2d(this.x, this.y);
    }
}