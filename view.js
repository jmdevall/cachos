import cabecero from './cabecero.js';
import {cajon,cuadrado2,cajonGrandeSpec} from './cabecero.js';
import {translateSegments} from './cachos.js';
import {scaleSegments} from './cachos.js';

function pintaSegmentos(xmax,ymax,segmentos,pintaborde){
    var c = document.getElementById("myCanvas");
    c.width  = xmax;
    c.height = ymax;
    var ctx = c.getContext("2d");
    if(pintaborde){
        borde(ctx,xmax,ymax)
    }
    
    segmentos.forEach(function(segmento){
        ctx.moveTo(segmento.p1.x, ymax-segmento.p1.y);
        ctx.lineTo(segmento.p2.x, ymax-segmento.p2.y);
    });
    ctx.stroke();
}

function borde(ctx,xmax,ymax){
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(xmax,0);
    ctx.lineTo(xmax,ymax);
    ctx.lineTo(0,ymax);
    ctx.lineTo(0,0);
    ctx.stroke();
}

//var segmentos=scaleSegments(cabecero(),{x:1370/1500,y:1});
//var segmentos=translateSegments(cabecero(),{x:-(1500-1370)/2,y:0});
//pintaSegmentos(1500,600,segmentos);
var xcajon=701;
var ycajon=167;
var margen=20;

var segmentos=cajon(cajonGrandeSpec,cuadrado2);
pintaSegmentos(xcajon,ycajon,segmentos,true);