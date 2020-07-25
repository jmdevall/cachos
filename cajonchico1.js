import ejs from 'ejs';
import {cajonChicoSpec,cajon,cuadrado1} from './cabecero.js';
var segmentos=cajon(cajonChicoSpec,cuadrado1);

var format4=(num)=>(Math.round(num * 100) / 100).toFixed(4);

ejs.renderFile("cajon.ejs",{
    segmentos:segmentos,
    cajonSpec:cajonChicoSpec,
    format4:format4,
    profundidad:3
}
    ,{},function(err, str){
    console.log(str);
    //console.log(err)
});

