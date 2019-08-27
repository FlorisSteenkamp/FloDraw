"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bezier_1 = require("./bezier");
const COLORS = ['red', 'green', 'cyan', 'blue'];
/**
 * Draws beziers.
 * @param snap
 * @param beziers
 * @param delay
 */
function beziers(g, beziers, classes, delay) {
    let alternateColors = classes === undefined;
    let $beziers = [];
    for (let i = 0; i < beziers.length; i++) {
        let ps = beziers[i];
        let color = COLORS[i % COLORS.length];
        let class_ = alternateColors
            ? 'thin5 nofill ' + color
            : classes;
        $beziers.push(...bezier_1.bezier(g, ps, class_));
    }
    if (delay) {
        setTimeout(() => $beziers.forEach(e => e.remove()), delay);
    }
    return $beziers;
}
exports.beziers = beziers;
//# sourceMappingURL=beziers.js.map