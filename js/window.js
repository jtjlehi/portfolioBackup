import {initWindowScroll} from "./animation/scroll.js";
class WindowRef {
    constructor() {
        this.top = 0;
        this.left = 0;
        this.section = 0;
        this.height = window.innerHeight;
        this.width = innerWidth;
    }
    change() {
        this.height = window.innerHeight;
        this.width = innerWidth;
    }
}
export let windowRef = new WindowRef();
export function initWindow() {
    initWindowScroll(windowRef);
    (function() {
        let throttle = function(type, name, obj) {
            obj = obj || window;
            let running = false;
            let func = function() {
                if (running) { return; }
                running = true;
                requestAnimationFrame(function() {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
                });
            };
            obj.addEventListener(type, func);
        };

        /* init - you can init any event */
        throttle("resize", "optimizedResize");
    })();
    // handle event
    window.addEventListener("optimizedResize", function() {
        windowRef.change();
    });
}
