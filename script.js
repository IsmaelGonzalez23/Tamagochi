const screen = document.getElementById("screen")
const context = screen.getContext("2d")



class healhBar {
    constructor (x, y , w, h, maxHealth, color){
        this.x =x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;
    }

    show(context){
        context.strokeStyle = "#333";
        context.lineWidth = 5;
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }
}