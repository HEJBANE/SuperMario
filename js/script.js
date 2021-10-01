mat= new Array(354,354,354,354,310,266,266,266,266,310,354,354,354,354,266,266,266,266,266,266,266,266,310,266,310,310,266,266,310,266,310,310,222,310,266,222,266,310,310,222,222,222,266,310,354,354,310,266,222,310,266,354,222,222,310,310,266,222,266,310,354,266,310,310,222,266,354,310,354,310,222,222,266,310,354);         
crocs= new Array(300,300,300,300,300,300,300,300,300,300,354,354,354,354,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,354,354,300,300,300,300,300,300,300,300,310,310,300,300,300,300,300,300,310,310,300,300,300,300,300,300,300,300,300,300,301);
lava= new Array(374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374,0,374);         
for(i=0;i<=74;i++){
if (lava[i]!=0){
    document.write('<img src=images/lava.gif style="position:absolute;top:'+lava[i]+'px;left:'+i*20+'px">');}
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
var y=300;
var sign='';
document.onkeydown  = getKeystart;
document.onkeyup    = getKeyend;
let ok=1;
let debut=Date.now();
function play(){   
    if (ok==1){
     debut== Date.now();
    console.log(debut);
    ok=0;
    }    
    if (t!=-50){
        t++;dy-=t;
    }
    if ((y-dy>=mat[Math.round(x/20)]-37)&&(y-dy<=mat[Math.round(x/20)]-27))
    {
    t=-50;dy=0;y=mat[Math.round(x/20)]-34;
    }
    else
    {
    if ((y-dy<mat[Math.round(x/20)]-37)&&(t==-50)){t=1;
    }
    if ((y-dy>mat[Math.round(x/20)]-27)&&(t==-50))
    {
    t=1;
    }}
    if(Math.abs(dx)==5){
        x+=dx;
        if (pos==1){
            pos=0;
            if (dx==5){
                sign='';
            }
            else{
                sign='1';
            }
            document.getElementById('hero').innerHTML='<img src=images/hero'+sign+'0.gif>';
        }
        else{
            pos=1;
            document.getElementById('hero').innerHTML='<img src=images/hero'+sign+'1.gif>';
        }
    }
    document.getElementById('hero').style.left=x;
    document.getElementById('hero').style.top=y-dy;
    window.scrollTo(x-200,0);
    if (x>=1480){
        let fin = Date.now();
        let duree = fin - debut;
        var seconds = ((duree % 60000) / 1000).toFixed(0);
        alert('Bravo! tu as gagne ce niveau! Avec un temps de: '+ seconds+ ' secondes');
    
        this.location='index.html';
    }
    else{
        if ((t==-50)&&(crocs[Math.round(x/19.5)]!=300)&&(crocs[Math.round(x/19.5)]!=301)||(y-dy>350)){
            let fin = Date.now();
            let duree = fin - debut;
            var seconds = ((duree % 60000) / 1000).toFixed(0);
            alert('Tu as perdu ! Avec un score de:'+ (x-70)+' et un temps de: '+ seconds+' secondes');
        
            x=40;
            pos=0;
            dx=0;
            dy=0;t=-50;
            y=170;
            sign='';
            window.scrollTo(0,0);
        }
        setTimeout("play()",50);
    }
}

    function getKeystart(keyStroke)    {

        isNetscape=(document.getElementById && !document.all);
        touche = (isNetscape) ? keyStroke.which : event.keyCode;
        if ((touche==37))
        {dx=-5;}
        if ((touche==39))
        {dx=5;}
        if ((touche==38) && (t==-50)){t=-12;}
        }
        
        function getKeyend(keyStroke)    {  
        isNetscape=(document.getElementById && !document.all);
        touche = (isNetscape) ? keyStroke.which : event.keyCode;
        if ((touche==37))
        {dx=0;}
        if ((touche==39))
        {dx=0;}
        }
