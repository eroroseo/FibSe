//initial canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';
hue = Math.random() * 10;

//global variables
let number = 0;
let scale = 5;

//effects
function drawFlower() {
    let angle = number * 22.2;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width / 2;
    let positionY = radius * Math.cos(angle) + canvas.height / 2;

    //Canvas API built in drawing methods
    ctx.fillStyle = `hsl(${hue}, 50%, 50%)`;
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3
    ctx.shadowColor = `hsl(${hue}, 50%, 50%)`;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 25, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue+=0.09;
}

//animate function
function animate() {
    //draw each frame
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFlower();
    if (number> 4000) return;
    requestAnimationFrame(animate);
}
animate();