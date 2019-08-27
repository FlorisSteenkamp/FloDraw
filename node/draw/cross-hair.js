"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const circle_1 = require("./circle");
const line_1 = require("./line");
/**
 * Draws a crosshair.
 */
function crossHair(g, p, classes = default_class_1.DEFAULT_CLASS, r = 3, delay) {
    let circle_ = { center: p, radius: r };
    let $circle = circle_1.circle(g, circle_, classes);
    let l1 = [[p[0] - r, p[1]], [p[0] + r, p[1]]];
    let l2 = [[p[0], p[1] - r], [p[0], p[1] + r]];
    let $l1 = line_1.line(g, l1, classes);
    let $l2 = line_1.line(g, l2, classes);
    if (delay) {
        setTimeout(() => {
            $circle.forEach(e => e.remove());
            $l1.forEach(e => e.remove());
            $l2.forEach(e => e.remove());
        }, delay);
    }
    return [...$circle, ...$l1, ...$l2];
}
exports.crossHair = crossHair;
//# sourceMappingURL=cross-hair.js.map