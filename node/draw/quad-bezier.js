"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const xmlns_1 = require("./xmlns");
function quadBezier(g, ps, class_ = default_class_1.DEFAULT_CLASS, delay) {
    let [[x0, y0], [x1, y1], [x2, y2]] = ps;
    let $path = document.createElementNS(xmlns_1.XMLNS, 'path');
    $path.setAttributeNS(null, "d", `M${x0} ${y0} Q${x1} ${y1} ${x2} ${y2}`);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}
exports.quadBezier = quadBezier;
//# sourceMappingURL=quad-bezier.js.map