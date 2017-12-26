import {windowRef} from "../window";

export function transition(direction) {
    if(direction === 'up') {
        windowRef.section --;
        let height = windowRef.height;
        windowRef.top -= height;
    }
}