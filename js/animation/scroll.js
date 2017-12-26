import {els} from '../userInterface.js';


export function addScrollToElement(factor, movingEl, scrollEl) {
    scrollEl.addEventListener('mousewheel', function (event) {
        els[movingEl].changeTop(-event.deltaY * factor);
    });
}
export function initWindowScroll(windowObj) {
    window.addEventListener('mousewheel', function (event) {
        windowObj.top -= event.deltaY;
        windowObj.left -= event.deltaX;
    });
}