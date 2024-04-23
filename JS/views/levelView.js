import { div } from "../../libs/html.js";
import { img } from "../../libs/html.js";

import { DIFFICULTY_LOW } from "../../libs/constants.js";
import { DIFFICULTY_MEDIUM } from "../../libs/constants.js";
import { DIFFICULTY_HIGH } from "../../libs/constants.js";

import { BaseView } from "./baseView.js";
import { GameButton } from "./gameButton.js";
import { BackButton } from "./backButton.js";

export class LevelView extends BaseView {

    constructor(parent, controller) {

        super(parent, controller);
        this.className = 'levelView';

        const backButton = new BackButton(this, '', () => {

            controller.handleBack();

        });

        this.insertBefore(backButton, this.firstChild);

        const levelContainer = div({ className: 'level-container' }, this);

        const logo = img({

            src: "../../IMG/brainAsset1.png",
            alt: "Brain Logo",
            className: 'menu-logo'

        }, levelContainer);

        const buttonsContainer = div({ className: 'menu-buttons-container' }, levelContainer);

        new GameButton(buttonsContainer, 'LOW', () => {

            console.log(DIFFICULTY_LOW)

        });

        new GameButton(buttonsContainer, 'MEDIUM', () => {

            console.log(DIFFICULTY_MEDIUM)

        });

        new GameButton(buttonsContainer, 'HIGH', () => {

            console.log(DIFFICULTY_HIGH)

        });

    }
}

customElements.define('level-view', LevelView);