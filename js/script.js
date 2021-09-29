var x=40;
var pos=0;
var dx=0;
var dy=0;
var t=-50;
var y=170;
var sign='';
document.onkeydown  = getKeystart;
document.onkeyup    = getKeyend;
function play()
{
    if(Math.abs(dx)==5){
        x+=dx;
        if (pos==1)
        {
            pos=0;
            if (dx==5){
                sign='';
            }else{
                sign='1';
            }
            document.getElementById('hero').innerHTML='<img src=hero'+sign+'0.gif>';
        }
        else{
            pos=1;document.getElementById('hero').innerHTML='<img src=hero'+sign+'1.gif>';
        }
    }
    document.getElementById('hero').style.left=x;
    document.getElementById('hero').style.top=y-dy;
    window.scrollTo(x-200,0);
    setTimeout("play()",50);
    console.log(dx);
}
function getKeystart(keyStroke){

isNetscape=(document.getElementById && !document.all);
touche = (isNetscape) ? keyStroke.which : event.keyCode;
if ((touche==37))
{dx=-5;}
if ((touche==39))
{dx=5;}
if ((touche==38) && (t==-50)){t=-12;}
}

function getKeyend(keyStroke){  
isNetscape=(document.getElementById && !document.all);
touche = (isNetscape) ? keyStroke.which : event.keyCode;
if ((touche==37))
{dx=0;}
if ((touche==39))
{dx=0;}
}