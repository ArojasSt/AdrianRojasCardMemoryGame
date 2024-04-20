
import { BaseView } from "./baseView.js";
import { BackButton } from "./backButton.js";

import { div } from "../../libs/html.js";
import { h1 } from "../../libs/html.js";
import { img } from "../../libs/html.js";

export class CreditsView extends BaseView {

    constructor(parent, controller) {

        super(parent, controller);
        this.className = 'creditsView';

        const backButton = new BackButton(this, '', () => {

            controller.handleBack();

        });

        this.insertBefore(backButton, this.firstChild);

        const creditsContainer = div({ className: 'credits-container' }, this);

        h1({ innerHTML: 'EMOJI', className: 'home-menu-title' }, creditsContainer);

        const logo = img({

            src: "../../IMG/brainAsset1.png",
            alt: "Brain Logo",
            className: 'home-menu-logo'

        }, creditsContainer);

        h1({ innerHTML: 'MEMORY', className: 'home-menu-subtitle1' }, creditsContainer);
        h1({ innerHTML: 'GAME', className: 'home-menu-subtitle2' }, creditsContainer);

        h1({ innerHTML: 'UNIVERSIDAD CENFOTEC', className: 'home-menu-subtitle1 universidad-title' }, creditsContainer);

        h1({ innerHTML: 'DIWEB-09', className: 'home-menu-subtitle1' }, creditsContainer);

        h1({ innerHTML: 'Adrián Rojas', className: 'home-menu-subtitle1' }, creditsContainer);

    }
}

customElements.define('credits-view', CreditsView);
