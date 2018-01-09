var content = document.querySelector('link[rel="import"]').import;

let tmpl = content.querySelector('#tic-tac-toe');

export class TicTacToe extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
}