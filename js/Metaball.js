import Ball from "./Ball.js";

class MetaballsEffect {
    constructor(width, height) {
        this.width= width;
        this.height= height;
        this.metaballsArray=[];
    }

    init(numOfBalls) {
        for (let i = 0; i < numOfBalls; i++) {
            this.metaballsArray.push(new Ball(this));
        }
    }
    update() {
        this.metaballsArray.forEach(metaball => metaball.update())
    }
    draw(context) {
        this.metaballsArray.forEach(metaball => metaball.draw(context));
    }
    reset(newWidth, newHeight) {
        this.width=newWidth;
        this.height=newHeight;
        this.metaballsArray.forEach(metaball => metaball.reset());
    }
}



export default MetaballsEffect;