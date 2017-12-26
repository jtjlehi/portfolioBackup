import {El} from './element.js';

export class NavButton extends El {
    constructor(elementClass, direction) {
        super(elementClass);
        this.direction = direction;
    }
    transition() {
        transition(this.direction);
    }
}
