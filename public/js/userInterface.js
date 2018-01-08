import {createClassEl} from './classes/element.js'
import {addScrollToElement} from "./animation/scroll.js";
import {initWindowScroll} from "./animation/scroll.js";
import {transition} from './animation/transition.js'
import {initWindow} from "./window.js";
import { TicTacToe } from '../ticTacToeComponent/component.js';

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
    customElements.define('tic-tac-toe', TicTacToe);
};
load();
window.addEventListener('mousewheel', function (event) {

});