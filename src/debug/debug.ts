
import { drawFs } from "../draw-fs";


interface Debug {
    /* Generated elements for later inspection */
    fs: { draw: typeof drawFs };
}


/**
 * Returns a new debug object by spreading boolean operation debug information
 * onto the given (possibly undefined) debug object.
 * @param debug a (possibly undefined) debug object
 */
function enableDebugDrawFs(debugOn: boolean) {
    if (!debugOn) { return; }

    let debug: Debug = (window as any)._debug_;

    debug = { 
        ...debug, 
        fs: {
            ...debug?.fs,
            draw: {
                ...drawFs
            }
        }
    };

    (window as any)._debug_ = debug;
}   


export { enableDebugDrawFs }
