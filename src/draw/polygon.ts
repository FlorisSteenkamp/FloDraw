
import { DEFAULT_CLASS } from './default-class';
import { XMLNS } from './xmlns';


function polygon(
        g      : SVGGElement,
        poly   : number[][], 
        class_ = DEFAULT_CLASS,
        delay? : number) {

    let $path = document.createElementNS(XMLNS, 'path');
    let d = `M${poly[0][0]} ${poly[0][1]} L`;
    for (let i=0; i<poly.length; i++) {
        d += `${poly[i][0]} ${poly[i][1]} `;
    }
    d += ' z';
    $path.setAttributeNS(null, "d", d);
    if (class_) { $path.setAttributeNS(null, "class", class_); }

    g.appendChild($path);

    if (delay) { setTimeout(() => $path.remove(), delay); }

    return [$path];
}


export { polygon }
