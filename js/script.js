var x=40;
var pos=0;
var dx=0;
var dy=0;
var t=-50;
var y=170;
var sign='';
document.onkeydown  = getKeystart;
document.onkeyup    = getKeyend;

function getKeystart(keyStroke){

isNetscape=(document.getElementById && !document.all);
touche = (isNetscape) ? keyStroke.which : event.keyCode;
if ((touche==37))
{dx=-5;}
if ((touche==39))
{dx=5;}
if ((touche==38) && (t==-50)){t=-12;}
}
