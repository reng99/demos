var canvasWidth=Math.min(400,$(window).width()-20);
var canvasHeight=canvasWidth;

var strokeColor="black";
var isMouseDown=false;
var lastLoc={x:0,y:0}
var lastTimestamp=0;
var lastLineWidth=-1;

var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");

canvas.width=canvasWidth;
canvas.height=canvasHeight;

$("#controller").css("width",canvasWidth+"px");
drawGrid();

$("#clear_btn").click(function(e){
    context.clearRect(0,0,canvasWidth,canvasHeight);
    drawGrid();
})

$(".color_btn").click(function(e){
    $(".color_btn").removeClass("color_btn_selected");
    $(this).addClass("color_btn_selected");
    strokeColor=$(this).css("background-color");
})
function beginStroke(point){
    isMouseDown=true;
    lastLoc=windowToCanvas(point.x,point.y);
    lastTimestamp=new Date().getTime();//记录开始移动画笔的时间
}
function endStroke(){
    isMouseDown=false;
}
function moveStroke(point){
    var curLoc=windowToCanvas(point.x,point.y);
    var curTimestamp= new Date().getTime();//获取画笔的当前的时间
    var s = calcDistance(curLoc,lastLoc);
    var t=curTimestamp-lastTimestamp;


    var lineWidth = calcLineWidth(t,s);

    context.beginPath();
    context.moveTo(lastLoc.x,lastLoc.y);
    context.lineTo(curLoc.x,curLoc.y);

    context.strokeStyle=strokeColor;
    context.lineWidth=lineWidth;
    context.lineCap="round";
    context.linejoin="round";
    context.closePath();
    context.stroke();


    lastTimestamp=curTimestamp;
    lastLoc=curLoc;
    lastLineWidth = lineWidth;
}

canvas.onmousedown=function(e){
    e.preventDefault();
    beginStroke({x: e.clientX,y: e.clientY});
}
canvas.onmouseup=function(e){
    e.preventDefault();
    endStroke();
}
canvas.onmouseout=function(e){
    e.preventDefault();
    endStroke();
}
canvas.onmousemove=function(e){
    e.preventDefault();
    if(isMouseDown){
        moveStroke({x: e.clientX,y: e.clientY});
    }
}

//移动端控制的代码
canvas.addEventListener("touchstart",function(e){
    e.preventDefault();
    touch= e.touches[0];
    beginStroke({x:touch.pagex,y:touch.pageY});
})
canvas.addEventListener("touchmove",function(e){
    e.preventDefault();
    if(isMouseDown){
        touch= e.touches[0];
        moveStroke({x:touch.pageX,y:touch.pageY});
    }
})
canvas.addEventListener("touchend",function(e){
    e.preventDefault();
    endStroke();
})

//关键代码
//动态改变画笔的粗细
var maxLineWidth = 30;
var minLineWidth = 1;
var maxStrokeV = 10;
var minStrokeV = 0.1;
function calcLineWidth(t,s){
    var v = s / t;
    var resultLineWidth;

    if(v<=minStrokeV){
        resultLineWidth = maxLineWidth;
    }else if(v>=maxStrokeV){
        resultLineWidth=minLineWidth;
    }else{
        resultLineWidth=maxLineWidth - (v-minStrokeV)/(maxStrokeV-minStrokeV)*(maxLineWidth-minLineWidth);
    }
    if(lastLineWidth == -1){
        return resultLineWidth;
    }
    return resultLineWidth*1/3+lastLineWidth*2/3;
}





//两点间的距离
function calcDistance(loc1,loc2){
    return Math.sqrt((loc1.x-loc2.x)*(loc1.x-loc2.x)+(loc1.y-loc2.y)*(loc1.y-loc2.y));
}
//得到鼠标点击的坐标相对所在CANVAS中（原点）的距离
function windowToCanvas(x,y){
    var bbox=canvas.getBoundingClientRect();
    return {x:Math.round(x-bbox.left),y:Math.round(y-bbox.top)};
}

//画出表格
function drawGrid(){
    context.save();

    context.strokeStyle="rgb(230,11,0)";

    context.beginPath();
    context.moveTo(3,3);
    context.lineTo(canvasWidth-3,3);
    context.lineTo(canvasWidth-3,canvasHeight-3);
    context.lineTo(3,canvasHeight-3);
    context.lineTo(3,3);
    context.closePath();
    context.lineWidth=6;
    context.stroke();

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(canvasWidth,canvasHeight);

    context.moveTo(canvasWidth,0);
    context.lineTo(0,canvasHeight);

    context.moveTo(0,canvasHeight/2);
    context.lineTo(canvasWidth,canvasHeight/2);

    context.moveTo(canvasWidth/2,0);
    context.lineTo(canvasWidth/2,canvasHeight);

    context.closePath();
    context.lineWidth=1;
    context.stroke();

    context.restore();
}




































