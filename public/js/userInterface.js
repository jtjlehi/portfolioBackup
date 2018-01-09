import {createClassEl} from './classes/element.js'
import {addScrollToElement} from "./animation/scroll.js";
import {initWindowScroll} from "./animation/scroll.js";
import {transition} from './animation/transition.js'
import {initWindow} from "./window.js";
// import { TicTacToe } from '../ticTacToeComponent/component.js';
// import { createComponent } from '../js/componentConstructor.js';
import { loadComponents } from '../js/componentsLoader.js';

export let els = {};
let load = function () {
    initWindow();
    $('.slideDown.projectsNavBtn').click(function () {
        transition.down('section404', $('.section0'));
    });
    $('.slideUp.sterlingNavBtn').click(function () {
        transition.up('section404', $('.section0'));
    });
    $('.slideLeft.miscNavBtn').click(function () {
        transition.left('section404', $('.section0'));
    });
    $('.slideRight.contactNavBtn').click(function () {
        transition.right('section404', $('.section0'));
    });
    //define custom elements
    loadComponents();
    let content = document.querySelector('link[rel="import"]').import;
    
    let tmpl = content.querySelector('#tic-tac-toe-piece');
    console.log(tmpl);
};
load();
window.addEventListener('mousewheel', function (event) {

});