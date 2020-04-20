"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const xmlns_1 = require("./xmlns");
const cross_hair_1 = require("./cross-hair");
function cubicBezier(g, bezier, class_ = default_class_1.DEFAULT_CLASS, delay) {
    let [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = bezier;
    if (x0 === x3 && x1 === x3 && x2 === x3 &&
        y0 === y3 && y1 === y3 && y2 === y3) {
        return cross_hair_1.crossHair(g, [x0, y0], class_, 0.2, delay);
    }
    let $path = document.createElementNS(xmlns_1.XMLNS, 'path');
    $path.setAttributeNS(null, "d", `M${x0} ${y0} C${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`);
    $path.setAttributeNS(null, "class", class_);
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}
exports.cubicBezier = cubicBezier;
//# sourceMappingURL=cubic-bezier.js.map