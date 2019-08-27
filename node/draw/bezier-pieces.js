"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const bezier_piece_1 = require("./bezier-piece");
function bezierPieces(g, bezierPieces, class_ = default_class_1.DEFAULT_CLASS, delay) {
    let $elems = [];
    for (let i = 0; i < bezierPieces.length; i++) {
        $elems.push(...bezier_piece_1.bezierPiece(g, bezierPieces[i].ps, bezierPieces[i].tRange, class_));
    }
    if (delay) {
        setTimeout(() => $elems.forEach(e => e.remove(), delay));
    }
    return $elems;
}
exports.bezierPieces = bezierPieces;
//# sourceMappingURL=bezier-pieces.js.map