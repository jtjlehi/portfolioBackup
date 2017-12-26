import {createClassEl} from './classes/element.js'
export let els = {};
let load = function () {
    createClassEl('div1');
    createClassEl('div2');
};
load();
window.addEventListener('mousewheel', function (event) {

});