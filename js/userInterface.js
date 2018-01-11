import {createClassEl} from './classes/element.js'
import {addScrollToElement} from "./animation/scroll.js";
import {initWindowScroll} from "./animation/scroll.js";
import {transition} from './animation/transition.js'
import {initWindow} from "./window.js";

export let els = {};
let load = function () {
    initWindow();
    $('.slideDown.projectsNavBtn').click(function () {
        transition.down('section404', $('.sectionHome'));
    });
    $('.slideUp.sterlingNavBtn').click(function () {
        transition.up('sectionSterlingScholar', $('.sectionHome'));
    });
    $('.slideLeft.miscNavBtn').click(function () {
        transition.left('section404', $('.sectionHome'));
    });
    $('.slideRight.contactNavBtn').click(function () {
        transition.right('section404', $('.sectionHome'));
    });
    $('.slideDown.homeNavBtn').click(function() {
        transition.down('sectionHome', $('.sectionSterlingScholar'))
    })
};
load();
window.addEventListener('mousewheel', function (event) {

});