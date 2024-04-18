
import { div } from "../../libs/html.js";
import { img } from "../../libs/html.js";
import { h1 } from "../../libs/html.js";

import { BaseView } from "./baseView.js";

export class LoadingView extends BaseView{

    constructor(parent) {

            super(parent);
            this.renderLoadingView();

    }

    renderLoadingView() {

        const container = div({ className: 'loading-container' });

        const spinnerImg = img({ className: 'loading-spinner', src: '../../IMG/brainAsset2.png' });

        const title = h1({ className: 'loading-title', innerHTML: 'Loading...' });

        container.appendChild(spinnerImg);
        container.appendChild(title);

        this.parent.appendChild(container)

        gsap.to(spinnerImg, { opacity: 0.5, duration: 0.5, repeat: -1, yoyo: true })

    }

}

customElements.define("loading-view", LoadingView);