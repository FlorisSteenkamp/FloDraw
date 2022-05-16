import { drawFs } from "../draw-fs.js";
/**
 * Returns a new debug object by spreading boolean operation debug information
 * onto the given (possibly undefined) debug object.
 * @param debugOn a (possibly undefined) debug object
 */
function enableDebugDrawFs(debugOn) {
    if (!debugOn) {
        return;
    }
    let debug = window._debug_;
    debug = {
        ...debug,
        fs: {
            ...debug?.fs,
            draw: {
                ...drawFs
            }
        }
    };
    window._debug_ = debug;
}
export { enableDebugDrawFs };
//# sourceMappingURL=debug.js.map