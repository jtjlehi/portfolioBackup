import {createClassEl} from './classes/element.js'
import {addScrollToElement} from "./animation/scroll.js";
import {initWindowScroll} from "./animation/scroll.js";
import {initWindow} from "./window.js";

export let els = {};
let load = function () {
    initWindow();
    document.getElementsByClassName('animationTest')[0].addEventListener('click', function () {
        document.getElementsByClassName('animationTest')[0].className += ' focus';
    });
};
load();
window.addEventListener('mousewheel', function (event) {

});