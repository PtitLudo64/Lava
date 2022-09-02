// import Ball from './Ball.js';
import MetaballsEffect from './Metaball.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// const gradient = ctx.createRadialGradient(canvas.width * 0.5 ,canvas.height*0.5 ,200, canvas.width * 0.5, canvas.height * 0.5, 370);
// gradient.addColorStop(0, '#F00');
// gradient.addColorStop(.1, '#500');
// gradient.addColorStop(.2, '#000');
// gradient.addColorStop(.3, '#900');
// gradient.addColorStop(.4, '#700');
// gradient.addColorStop(.5, '#500');
// gradient.addColorStop(.6, '#300');
// gradient.addColorStop(.7, '#100');
// gradient.addColorStop(.8, '#000');
// gradient.addColorStop(.9, '#000');
// gradient.addColorStop( 1, '#000');

ctx.fillStyle = '#f00';
// ctx.fillStyle = gradient;

const effect = new MetaballsEffect(canvas.width, canvas.height);
effect.init(20);


function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    effect.update();
    effect.draw(ctx);
    requestAnimationFrame(animate)
}

animate();
window.addEventListener('resize', ()=> {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = '#f00';
    effect.reset(canvas.width, canvas.height);
});