
import { DEFAULT_CLASS } from './default-class';
import { XMLNS } from './xmlns';

function rect(
        g       : SVGGElement,
        rect    : number[][],
        classes = DEFAULT_CLASS,
        delay?  : number) {

    let [[x0,y0],[x1,y1]] = rect;
    let x = x0 < x1 ? x0 : x1;
    let y = y0 < y1 ? y0 : y1;
    let width = Math.abs(x0-x1);
    let height = Math.abs(y0-y1);

    let $rect = document.createElementNS(XMLNS, 'rect');
    $rect.setAttributeNS(null, "x", x.toString());
    $rect.setAttributeNS(null, "y", y.toString());
    $rect.setAttributeNS(null, "width",  width.toString());
    $rect.setAttributeNS(null, "height", height.toString());
    if (classes) { $rect.setAttributeNS(null, "class", classes); }

    g.appendChild($rect);

    if (delay) { setTimeout(() => $rect.remove(), delay); }

    return [$rect];
}


export { rect }
