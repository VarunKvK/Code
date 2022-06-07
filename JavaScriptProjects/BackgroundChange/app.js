const body=document.querySelector("body");

var colors=["#FFE633","#33FF3F","#33F6FF","#3339FF","#F333FF","#FF3383"];
var i=0;
body.addEventListener("click",(e)=>{
        i=(i+1)%colors.length;
        body.style.background=colors[i];
});