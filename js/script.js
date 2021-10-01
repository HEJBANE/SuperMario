
mat= new Array(204,204,204,204,160,116,116,116,116,160,204,204,204,204,116,116,116,116,116,116,116,116,160,116,160,160,116,116,160,116,160,116,72,160,116,72,116,160,160,72,116,72,116,160,204,204,160,116,72,160,116,204,72,116,160,160,116,72,116,160,204,116,160,160,72,116,204,160,204,160,116,72,116,160,204);         
//44 pour monter descendre
crocs= new Array(300,300,300,300,300,300,300,300,300,300,204,204,204,204,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,204,204,300,300,300,300,300,300,300,300,160,160,300,300,300,300,300,300,160,160,300,300,300,300,300,300,300,300,300,300,301);
for(i=0;i<=74;i++){
if (mat[i]!=300){
document.write('<img src=images/floor2.gif style="position:absolute;top:'+mat[i]+'px;left:'+i*20+'px">');}
if (crocs[i]==301){
crocs[i]=mat[i]-24;
document.write('<img src=images/fin.gif style="position:absolute;top:'+crocs[i]+'px;left:'+i*20+'px">');
crocs[i]=301;}
if ((crocs[i]!=300)&&(crocs[i]!=301)){
crocs[i]-=11;
document.write('<img src=images/croco.gif style="position:absolute;top:'+crocs[i]+'px;left:'+i*20+'px">');}}

var x=40;
var pos=0;
var dx=0;
var dy=0;
var t=-50;
var y=150;
var sign='';
document.onkeydown  = getKeystart;
document.onkeyup    = getKeyend;
function play()
{
    if (t!=-50  ){
        t++;
        if(dy>0){
        dy-=t;
        }
        else
        {
            dy=0;
            t=-50;
            
        }
    }
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
            document.getElementById('hero').innerHTML='<img style="width:40px" src=images/hero'+sign+'0.gif>';
        }
        else{
            pos=1;document.getElementById('hero').innerHTML='<img style="width:40px" src=images/hero'+sign+'1.gif>';
        }
    }
    document.getElementById('hero').style.left=x;
    document.getElementById('hero').style.top=y-dy;
    window.scrollTo(x-200,0);
    setTimeout("play()",50);
}

function getKeystart(keyStroke){

isNetscape=(document.getElementById && !document.all);
touche = (isNetscape) ? keyStroke.which : event.keyCode;
if ((touche==37))
{
    dx=-5;
}
if ((touche==39))
{
    dx=5;
}
if ((touche==38) && (t==-50))
{
    t=-12;
    dy=-t;
}
}

function getKeyend(keyStroke){  
isNetscape=(document.getElementById && !document.all);
touche = (isNetscape) ? keyStroke.which : event.keyCode;
if ((touche==37))
{dx=0;}
if ((touche==39))
{dx=0;}
}
