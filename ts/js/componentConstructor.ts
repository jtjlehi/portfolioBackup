export function createComponent(templateId: string) {
    let content = document.querySelector('link[rel="import"]').import;
    
    let tmpl = content.querySelector('#' + templateId);
    
    class ElementConstructor extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
        }
    }
    customElements.define(templateId, ElementConstructor);
}
