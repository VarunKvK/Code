const gamediv=document.querySelector('.gamediv');
const ctx=gamediv.getContext('2d');

gamediv.height=500;
gamediv.width=700;

let rightPressed=false;
let leftPressed=false;
let upPressed=false;
let downPressed=false;

document.addEventListener('keydown',keydown)
document.addEventListener('keyup',keyup)

//arrowfunction
function keydown(e){
    let key=e.key;
    if(key=='ArrowRight'||key=='Right'){
        rightPressed=true;
    }
    if(key=='ArrowLeft'||key=='Left'){
        leftPressed=true;
    }
    if(key=='ArrowUp'||key=='Up'){
        upPressed=true;
    }
    if(key=='ArrowDown'||key=='Down'){
        downPressed=true;
    }
}
function keyup(e){
    let key=e.key;
    if(key=='ArrowRight'||key=='Right'){
        rightPressed=false;
    }
    if(key=='ArrowLeft'||key=='Left'){
        leftPressed=false;
    }
    if(key=='ArrowUp'||key=='Up'){
        upPressed=false;
    }
    if(key=='ArrowDown'||key=='Down'){
        downPressed=false;
    }
}

//chars
let char={
    x:12,
    y:gamediv.height-50,
    width:50,
    height:40,
    draw:function(){
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fillStyle='rgb(250, 176, 16)';
        ctx.fill();
        ctx.closePath();
    }
}

function movechar(){
    if(rightPressed){
        char.x+=5;
        if(char.x+char.width>=gamediv.width){
            char.x=gamediv.width-char.width;
        }
    }
    if(leftPressed){
        char.x-=5;
        if(char.x<0){
            char.x=0;
        }
    }
    
    if(upPressed){
        char.y-=5;
        if(char.y+char.height>=gamediv.height){
            char.y=gamediv.height-char.height;
        }
    }
    if(downPressed){
        char.y+=5;
    }

}


function play(){
    ctx.clearRect(0,0,gamediv.width,gamediv.height)
    char.draw();
    movechar();

    requestAnimationFrame(play);
}

play();