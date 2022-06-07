const gamediv = document.querySelector('.gamediv');
const ctx = gamediv.getContext('2d')

gamediv.height = 500;
gamediv.width = 500;

let rightPressed = false;
let leftPressed = false;

document.addEventListener('keyup', keyUpHandler)
document.addEventListener('keydown', keyDownHandler)


function keyDownHandler(e) {
    const keypressed = e.key;
    if (keypressed == 'Right' || keypressed == 'ArrowRight') {
        rightPressed = true;
    }
    else if (keypressed == 'Left' || keypressed == 'ArrowLeft') {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    const keypressed = e.key;
    if (keypressed == 'Right' || keypressed == 'ArrowRight') {
        rightPressed = false;
    }
    else if (keypressed == 'Left' || keypressed == 'ArrowLeft') {
        leftPressed = false;
    }
}

function movetheball(){
    ball.x += ball.dx;
    ball.y += ball.dy;

    if(ball.x+ball.radius>gamediv.width||ball.x-ball.radius<0){
        ball.dx*=-1;
    }
    if(ball.y+ball.radius>gamediv.width||ball.y-ball.radius<0){
        ball.dy*=-1;
    }
}

function movethepaddle(){
    if(rightPressed){
        paddle.x+=5;
        if(paddle.x+paddle.width>=gamediv.width){
            paddle.x=gamediv.width-paddle.width;
        }
    }
    if(leftPressed){
        paddle.x-=5;
        if(paddle.x<0){
            paddle.x=0;
        }
    }
}

function balltouching(){
    if(ball.x>=paddle.x && ball.x<=paddle.x+paddle.width && ball.y+ball.radius>=gamediv.height-paddle.height){
        ball.dy*=-1;
    }
}

let speed = 3
let ball = {
    x: gamediv.width / 2,//250px
    y: gamediv.height - 50,//450px
    dx: speed,//3
    dy: -speed + 1,//-2
    radius: 8,
    draw: function () {
        ctx.beginPath();
        ctx.fillStyle = 'rgb(201, 11, 11)';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }
}

let paddle = {
    height: 10,
    width: 70,
    x: gamediv.width / 2 - 76 / 2,
    draw: function () {
        ctx.beginPath();
        ctx.fillStyle = 'rgb(255, 77, 77)';
        ctx.rect(this.x,gamediv.height-this.height,this.width,this.height);
        ctx.closePath();
        ctx.fill();
    }
}

function play() {
    ctx.clearRect(0,0,gamediv.width,gamediv.height)
    ball.draw();
    paddle.draw();
    movetheball();
    movethepaddle();
    balltouching()

    requestAnimationFrame(play);
}

play();