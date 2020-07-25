import {pointListToSegments,cacho} from './cachos.js';
import {translateSegments} from './cachos.js';

var n=0.0001;

export var cuadrado1 = function(u,v,av1,av2){
    var contorno1=pointListToSegments([
        {x:0*u,y:v},
        {x:0*u,y:4*v},
        {x:3*u,y:4*v}
    ]);
    var contorno2=pointListToSegments([
        {x:0*u,y:0*v},
        {x:0*u,y:1*v},
        {x:3*u,y:4*v},
        {x:4*u,y:4*v},
        {x:4*u,y:3*v},
        {x:1*u,y:0*v}
    ]);
    var contorno3=pointListToSegments([
        {x:1*u,y:0*v},
        {x:4*u,y:3*v},
        {x:4*u,y:0*v},
    ]);

    var cacho1=cacho(contorno1,{x:2*u,y:4*v-n},{x:0,y:-av1},300,50);
    var cacho2=cacho(contorno2,{x:0*u-9,y:4*v},{x:av2,y:-av2},300,100);
    var cacho3=cacho(contorno3,{x:3*u,y:0*v+n},{x:0,y:av1},300,50);
    var conjuntocachos=[];

    conjuntocachos=conjuntocachos.concat(cacho1);
    conjuntocachos=conjuntocachos.concat(cacho2);
    conjuntocachos=conjuntocachos.concat(cacho3);

    return conjuntocachos;
}

export var cuadrado2=function(u,v,av1,av2){
    var contorno4=pointListToSegments([
        {x:0*u,y:2*v},
        {x:0*u,y:4*v},
        {x:1*u,y:4*v},
        {x:3*u,y:2*v}
    ]);
    var contorno5=pointListToSegments([
        {x:0*u,y:0*v},
        {x:0*u,y:2*v},
        {x:3*u,y:2*v},
        {x:1*u,y:0*v}
    ]);
    var contorno6=pointListToSegments([
        {x:1*u,y:0*v},
        {x:3*u,y:2*v},
        {x:4*u,y:1*v},
        {x:4*u,y:0*v}       
    ])
    var contorno7=pointListToSegments([
        {x:1*u,y:4*v},
        {x:4*u,y:4*v},
        {x:4*u,y:1*v}       
    ])
    var cacho4=cacho(contorno4,{x:1*u,y:2*v+n},{x:0,y:av1},300,50)
    var cacho5=cacho(contorno5,{x:0*u,y:1*v},{x:av1,y:0},300,50)
    var cacho6=cacho(contorno6,{x:4*u,y:0*v},{x:-av2,y:av2},300,50)
    var cacho7=cacho(contorno7,{x:4*u,y:4*v},{x:-av2,y:-av2},300,50)

    var conjuntocachos=[];
    conjuntocachos=conjuntocachos.concat(cacho4);
    conjuntocachos=conjuntocachos.concat(cacho5);
    conjuntocachos=conjuntocachos.concat(cacho6);
    conjuntocachos=conjuntocachos.concat(cacho7);
    return conjuntocachos;
}

export var cuadrado3=function(u,v,av1,av2){
    var contorno8=pointListToSegments([
        {x:0*u,y:0*v},
        {x:0*u,y:4*v},
        {x:2*u,y:4*v},
        {x:2*u,y:1*v},
        {x:1*u,y:0*v}, 
    ])
    var contorno9=pointListToSegments([
        {x:2*u,y:1*v},
        {x:2*u,y:4*v},
        {x:4*u,y:4*v},
        {x:4*u,y:3*v},
    ])
    var contorno10=pointListToSegments([
        {x:1*u,y:0*v},
        {x:4*u,y:3*v},
        {x:4*u,y:0*v}
    ])
    var cacho8=cacho(contorno8,{x:1*u,y:4*v-n},{x:0,y:-av1},300,100)
    var cacho9=cacho(contorno9,{x:2*u+n,y:3.1*v},{x:av1,y:0},300,50)
    var cacho10=cacho(contorno10,{x:4*u,y:0*v},{x:-av2,y:av2},300,50)
    
    var conjuntocachos=[];

    conjuntocachos=conjuntocachos.concat(cacho8);
    conjuntocachos=conjuntocachos.concat(cacho9);
    conjuntocachos=conjuntocachos.concat(cacho10);

    return conjuntocachos;
}

export default function cabecero(){
    var y=500;
    var x=y*3;
 
    var u=x/12;
    var v=y/4;
    var av1=12 ;
    var av2=9;

    var conjuntocachos=[];
    //conjuntocachos=conjuntocachos.concat(contorno9);

    var lcuadrado1=cuadrado1(u,v,av1,av2);
    var lcuadrado2=cuadrado2(u,v,av1,av2);
    var lcuadrado3=cuadrado3(u,v,av1,av2);

    conjuntocachos=conjuntocachos.concat(lcuadrado1);
    conjuntocachos=conjuntocachos.concat(translateSegments(lcuadrado2,{x:4*u,y:0}));
    conjuntocachos=conjuntocachos.concat(translateSegments(lcuadrado3,{x:8*u,y:0}));

    conjuntocachos=conjuntocachos.concat([
        {p1:{x:4*u,y:0},p2:{x:4*u,y:4*u}},
        {p1:{x:8*u,y:0},p2:{x:8*u,y:4*u}},
    ]);

    return conjuntocachos;
}

export var cajonGrandeSpec={
    x:701,
    y:167,
    z:14,
    margen:20,
}

export var cajonChicoSpec={
    x:526,
    y:175,
    z:14,
    margen:20,
}


export var cajon=function(espec,cuadradoGenerator){

    var v=(espec.y-(2*espec.margen))/4;
    var u=v;

    var segmentos=cuadradoGenerator(u,v,6,5);
    segmentos=segmentos.concat(cuadrado(4*u));

    segmentos=translateSegments(segmentos,{
        x:(espec.x-4*u)/2,
        y:espec.margen
    });
    return segmentos;
}


var cuadrado=function(lado){
    return pointListToSegments([
        {x:0,y:0},
        {x:0,y:lado},
        {x:lado,y:lado},
        {x:lado,y:0}
    ])
};
