import ejs from 'ejs';
import cabecero from './cabecero.js';
import {scaleSegments} from './cachos.js';
var segmentos=scaleSegments(cabecero(),{x:1370/1500,y:1});

let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});
var format4=(num)=>(Math.round(num * 100) / 100).toFixed(4);

ejs.renderFile("cama.ejs",{
    cabecero:segmentos,
    format4:format4
}
    ,{},function(err, str){
    console.log(str);
    //console.log(err)
});

