import {windowRef} from "../window.js";

function transitionFactory(distance, orientation) {
    if(orientation === 0) {
        return function (newElClass, prevEl) {
            document.styleSheets[0].insertRule(`section.${newElClass} {
                top: ${distance}px;
            }`);
            setTimeout(() => {
                $('section.last').removeClass('last');
                $('.' + newElClass).addClass('focus');
                prevEl.removeClass('focus');
                prevEl.addClass('last');
            }, 1);
        }
    }
    if(orientation === 1) {
        return function (newElClass, prevEl) {
            document.styleSheets[0].insertRule(`section.${newElClass} {
                left: ${distance}px;
            }`);
            setTimeout(() => {
                $('section.last').removeClass('last');
                $('.' + newElClass).addClass('focus');
                prevEl.removeClass('focus');
                prevEl.addClass('last');
            }, 1);
        }
    }
}
export let transition = {
    'right': transitionFactory(windowRef.width*2, 1),
    'left': transitionFactory(-windowRef.width, 1),
    'up': transitionFactory(-windowRef.height, 0),
    'down': transitionFactory(windowRef.height, 0)
};