
export class BaseView extends HTMLElement {

    constructor(parent, controller = null) {
        super();
        this.parent = parent;
        this.controller = controller;
        this.parent.appendChild(this);
        this.className = "baseView";

    }

    delete() {
        this.parent.removeChild(this);
    }
}

customElements.define("base-view", BaseView);