import {initWindowScroll} from "./animation/scroll.js";

export let windowRef = {
    top: 0,
    left: 0,
    section: 0,
    height: window.innerHeight,
    width: window.innerWidth,
};
export function initWindow() {
    initWindowScroll(windowRef);
}