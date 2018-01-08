import {els} from '../userInterface.js';

export class El {
    constructor(elementClass) {
        this.ref = document.getElementsByClassName(elementClass)[0];
        this.top =  0;
    }
    changeTop(amount) {
        this.top += amount;
        this.ref.style.top = this.top + 'px';
    }
}
export function createClassEl(className) {
    els[className] = new El(className);
}