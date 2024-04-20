
import { div } from "../../libs/html.js";
import { img } from "../../libs/html.js";
import { SCORES_STATE } from "../../libs/constants.js";
import { CREDITS_STATE } from "../../libs/constants.js";
import { THEMES_STATE } from "../../libs/constants.js";
import { DIFFICULTY_STATE } from "../../libs/constants.js";
import { PLAY_STATE } from "../../libs/constants.js";

import { BaseView } from "./baseView.js";
import { GameButton } from "./gameButton.js";
import { BackButton } from "./backButton.js";

export class MenuView extends BaseView {

    constructor (parent, controller) {

        super(parent, controller);
        this.className = 'menuView';

        const backButton = new BackButton(this, '', () => {

            controller.handleBack();

        });

        this.insertBefore(backButton, this.firstChild);

        const menuContainer = div({ className: 'menu-container' }, this);

        const logo = img({

            src: "../../IMG/brainAsset1.png",
            alt: "Brain Logo",
            className: 'menu-logo'

        }, menuContainer);

        const buttonsContainer = div({ className: 'menu-buttons-container' }, menuContainer); 

        new GameButton(buttonsContainer, 'PLAY', () => {

            this.onMenuButtonClick(PLAY_STATE);

        });

        new GameButton(buttonsContainer, 'SCORES', () => {

            this.onMenuButtonClick(SCORES_STATE);

        });

        new GameButton(buttonsContainer, 'LEVEL', () => {

            this.onMenuButtonClick(DIFFICULTY_STATE);

        });

        new GameButton(buttonsContainer, 'THEMES', () => {

            this.onMenuButtonClick(THEMES_STATE);

        });

        new GameButton(buttonsContainer, 'CREDITS', () => {

            this.onMenuButtonClick(CREDITS_STATE);

        });

    }

    onMenuButtonClick(state) {

        const event = new CustomEvent('goto-state', {

            detail: {state: state},
            bubbles: true,
            cancelable: true,
            composed: false

        });

        this.dispatchEvent(event);

    }

}

customElements.define("menu-view", MenuView);