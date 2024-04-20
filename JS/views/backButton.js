
import { BaseView } from "./baseView.js";

export class BackButton extends BaseView {

    constructor(parent, title, callback) {

        super(parent);
        this.className = "backButton";
        this.innerHTML = title;

        this.onclick = () => {

            gsap.to(this, { scale: 1.5, duration: 0.2, ease: "expo.in", yoyo: true, repeat: 1 });
            callback()

        }

    }

}

customElements.define('back-button', BackButton);