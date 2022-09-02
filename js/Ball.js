class Ball {
    constructor (effect) {
        this.effect = effect;
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height -150;
        this.radius = Math.random() * 50 + 20;
        this.speedX = Math.random() - 0.5;
        this.speedY = Math.random() - 0.5;
        this.angle = 0;
        this.va = Math.random() * 0.1 - 0.05;
        this.range = Math.random() * 20;
    }
    update() {
        if (this.x < this.radius || this.x > this.effect.width - this.radius) this.speedX *=-1;
        if (this.y < this.radius || this.y > this.effect.height - this.radius) this.speedY *=-1;
        this.angle += this.va;
        this.x += this.speedX * Math.tan(this.angle) * this.range * 0.005;
        this.y += this.speedY * Math.sin(this.angle) * this.range * 0.8;

    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    reset() {
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
    }
}

export default Ball;