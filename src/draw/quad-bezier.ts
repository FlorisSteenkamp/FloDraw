import { DEFAULT_CLASS } from './default-class.js';
import { XMLNS } from './xmlns.js';


function quadBezier(
        g      : SVGGElement,
        ps     : number[][], 
        class_ : string = DEFAULT_CLASS,
        delay? : number) {


    let [[x0,y0],[x1,y1],[x2,y2]] = ps;

    let $path = document.createElementNS(XMLNS, 'path');
    $path.setAttributeNS(
        null, 
        "d", 
        `M${x0} ${y0} Q${x1} ${y1} ${x2} ${y2}`
    );
    if (class_) { $path.setAttributeNS(null, "class", class_); }

    g.appendChild($path);

    if (delay) { setTimeout(() => $path.remove(), delay); }

    return [$path];
}


export { quadBezier }
