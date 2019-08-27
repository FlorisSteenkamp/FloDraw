"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const xmlns_1 = require("./xmlns");
/**
 * Draws a circle
 * @param g An SVG group element wherein to draw the circle.
 * @param circle
 * @param classes
 * @param delay
 */
function circle(g, circle, classes = default_class_1.DEFAULT_CLASS, delay) {
    let c = circle.center;
    let r = circle.radius;
    let $circle = document.createElementNS(xmlns_1.XMLNS, 'circle');
    $circle.setAttributeNS(null, "cx", c[0].toString());
    $circle.setAttributeNS(null, "cy", c[1].toString());
    $circle.setAttributeNS(null, "r", r.toString());
    $circle.setAttributeNS(null, "class", classes);
    g.appendChild($circle);
    if (delay) {
        setTimeout(() => $circle.remove(), delay);
    }
    return [$circle];
}
exports.circle = circle;
//# sourceMappingURL=circle.js.map