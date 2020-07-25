import ejs from 'ejs';
import {cajonGrandeSpec,cajon,cuadrado2} from './cabecero.js';
var segmentos=cajon(cajonGrandeSpec,cuadrado2);

var format4=(num)=>(Math.round(num * 100) / 100).toFixed(4);

ejs.renderFile("cajon.ejs",{
    segmentos:segmentos,
    cajonSpec:cajonGrandeSpec,
    format4:format4,
    profundidad:3
}
    ,{},function(err, str){
    console.log(str);
    //console.log(err)
});

