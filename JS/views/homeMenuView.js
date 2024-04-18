
import { LOGIN_STATE, MENU_STATE } from "../../libs/constants.js";

import { div } from "../../libs/html.js";
import { h1 } from "../../libs/html.js";
import { img } from "../../libs/html.js";

import { BaseView } from "./baseView.js";

import { GameButton } from "./gameButton.js";

export class HomeView extends BaseView {

    constructor(parent, controller, gameManager) {

        super(parent, controller);
        this.className = 'HomeView';

        const container = div({ className: 'home-menu-container' }, this);

        h1({ innerHTML: 'EMOJI', className: 'home-menu-title' }, container);

        const logo = img({

            src: "../../IMG/brainAsset1.png",
            alt: "Brain Logo",
            className: 'home-menu-logo'

        }, container);

        h1({ innerHTML: 'MEMORY', className: 'home-menu-subtitle1' }, container);
        h1({ innerHTML: 'GAME', className: 'home-menu-subtitle2' }, container);

        const champeonScoreContainer = div({ className: 'champeon-score-container' }, container)

        h1({ innerHTML: 'CHAMPION', className: 'champion-title' }, champeonScoreContainer);

        const championNameContainer = div({ className: 'champion-name-container' }, champeonScoreContainer);

        h1({ innerHTML: 'Adrian Rojas', className: 'champion-name' }, championNameContainer);

        h1({ innerHTML: 'SCORE: 1000PTS', className: 'champion-score' }, champeonScoreContainer)

        const buttonContainer = div({ className: 'mm-button-container' }, container);

        new GameButton(buttonContainer, "LOGIN", controller.navigateToLogin.bind(controller));
        new GameButton(buttonContainer, "MENU", controller.navigateToMenu.bind(controller));

    }

}

customElements.define("home-menu-view", HomeView);