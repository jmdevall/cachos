

export function cacho(contorno,pini,dir,escala,numRayas){
    var ret=[];

    var from,to;
    var p={
        x:pini.x,
        y:pini.y
    }
    var numRaya=0;
    for(numRaya=0;numRaya<numRayas;numRaya++){
        from={
            x:p.x+(dir.y)*escala,
            y:p.y+(-dir.x)*escala
        }
        to={
            x:p.x+(-dir.y)*escala,
            y:p.y+(dir.x)*escala
        }
        
        var intersections=[]
        contorno.forEach(function(segment){
            
            var intersection = intersec(segment,{p1:from,p2:to});
            if(intersection.intersect){
                intersections.push(intersection);
            }
        })
        
        if(intersections.length==2){
            ret.push(
                {
                    p1:Object.assign({},intersections[0]),
                    p2:Object.assign({},intersections[1])
                },
            );
        }
 
        p={
            x:p.x+dir.x,
            y:p.y+dir.y
        }
    }

    return ret;
}

export function scaleSegments(segments,vector){
    return segments.map((segment)=>{
        return scale(segment,vector);
    });  
}

export function scale(segment,vector){
    return {
        p1:{
            x:segment.p1.x*vector.x,
            y:segment.p1.y*vector.y
        },
        p2:{
            x:segment.p2.x*vector.x,
            y:segment.p2.y*vector.y
        }
    }
}

export function translateSegments(segments,vector){
    return segments.map((segment)=>{
        return translate(segment,vector);
    });
}

export function translate(segment,vector){
    return {
        p1:{
            x:segment.p1.x+vector.x,
            y:segment.p1.y+vector.y
        },
        p2:{
            x:segment.p2.x+vector.x,
            y:segment.p2.y+vector.y
        }
    }
}

export function pointListToSegments(points){
    var lastpoint=null;
    var segments=[];

    points.forEach(function(point){
        if(lastpoint!=null){
            segments.push({p1:lastpoint,p2:point});
        }
        lastpoint=point;
    })
    segments.push({p1:lastpoint,p2:points[0]});
    return segments;
}

function intersec(seg1,seg2){
    var deno=(seg2.p2.y-seg2.p1.y)*(seg1.p2.x-seg1.p1.x)-(seg2.p2.x-seg2.p1.x)*(seg1.p2.y-seg1.p1.y);
    var nume1=(seg2.p2.x-seg2.p1.x)*(seg1.p1.y-seg2.p1.y)-(seg2.p2.y-seg2.p1.y)*(seg1.p1.x-seg2.p1.x);
    var nume2=(seg1.p2.x-seg1.p1.x)*(seg1.p1.y-seg2.p1.y)-(seg1.p2.y-seg1.p1.y)*(seg1.p1.x-seg2.p1.x);
     if( deno==0 ){ //paralelas
        return{
            intersect:false 
        }; 
    }
    var ua=nume1/deno;
    var ub=nume2/deno;
     if(ua>=0 && ua<1 && ub>=0 && ub<1){
        return {
            intersect:true,
            x: seg1.p1.x + ua *(seg1.p2.x - seg1.p1.x),
            y: seg1.p1.y + ua *(seg1.p2.y - seg1.p1.y)
        }
    }
    return {
        intersect:false
    }
}

