import { DEFAULT_CLASS } from "./default-class.js";
import { XMLNS } from "./xmlns.js";
import { crossHair } from "./cross-hair.js";


function cubicBezier(
        g      : SVGGElement,
        bezier : number[][], 
        class_ = DEFAULT_CLASS,
        delay? : number) {

    let [[x0,y0],[x1,y1],[x2,y2],[x3,y3]] = bezier;

    if (x0 === x3 && x1 === x3 && x2 === x3 &&
        y0 === y3 && y1 === y3 && y2 === y3) {
        return crossHair(g, [x0,y0], class_, 0.2, delay);
    } 

    let $path = document.createElementNS(XMLNS, 'path');
    $path.setAttributeNS(
        null, 
        "d", 
        `M${x0} ${y0} C${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`
    );
    $path.setAttributeNS(null, "class", class_); 

    g.appendChild($path);

    if (delay) { setTimeout(() => $path.remove(), delay); }

    return [$path];
}


export { cubicBezier }
