"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const draw_fs_1 = require("../draw-fs");
/**
 * Returns a new debug object by spreading boolean operation debug information
 * onto the given (possibly undefined) debug object.
 * @param debug a (possibly undefined) debug object
 */
function enableDebugDrawFs(debugOn) {
    if (!debugOn) {
        return;
    }
    let debug = window._debug_;
    debug = Object.assign(Object.assign({}, debug), { fs: Object.assign(Object.assign({}, debug === null || debug === void 0 ? void 0 : debug.fs), { draw: Object.assign({}, draw_fs_1.drawFs) }) });
    window._debug_ = debug;
}
exports.enableDebugDrawFs = enableDebugDrawFs;
//# sourceMappingURL=debug.js.map