"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const xmlns_1 = require("./xmlns");
function loop(g, curves, class_ = default_class_1.DEFAULT_CLASS, delay) {
    if (!curves.length) {
        return [];
    }
    let $path = document.createElementNS(xmlns_1.XMLNS, 'path');
    let d = `M${curves[0][0][0]} ${curves[0][0][1]} `;
    for (let i = 0; i < curves.length; i++) {
        let curve = curves[i];
        d += `${getType(curve.length)} `;
        for (let j = 1; j < curve.length; j++) {
            d += `${curve[j][0]} ${curve[j][1]} `;
        }
    }
    d += ' z';
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}
exports.loop = loop;
function getType(len) {
    if (len === 2) {
        return 'L';
    }
    if (len === 3) {
        return 'Q';
    }
    if (len === 4) {
        return 'C';
    }
}
//# sourceMappingURL=loop.js.map