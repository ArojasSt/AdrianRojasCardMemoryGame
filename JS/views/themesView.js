
import { BaseView } from "./baseView.js";
import { GameButton } from "./gameButton.js";
import { BackButton } from "./backButton.js";

import { h1 } from "../../libs/html.js";
import { div } from "../../libs/html.js";
import { img } from "../../libs/html.js";

import { THEME_ANIMALS, THEME_BODY, THEME_FACES, THEME_FOOD } from "../../libs/constants.js";
import { MENU_STATE } from "../../libs/constants.js";

export class ThemeView extends BaseView {

    constructor(parent, controller) {

        super(parent, controller);
        this.className = 'levelView';

        const backButton = new BackButton(this, '', () => {

            controller.handleBack();

        });

        this.insertBefore(backButton, this.firstChild);

        const themesContainer = div({ className: 'theme-container' }, this);

        const logo = img({

            src: "../../IMG/brainAsset1.png",
            alt: "Brain Logo",
            className: 'menu-logo'

        }, themesContainer);

        h1({ innerHTML: 'THEMES', className: 'home-menu-title' }, themesContainer);


        const buttonsContainer = div({ className: 'menu-buttons-container' }, themesContainer);

        let facesBtn = new GameButton(this, "FACES", () => {

            this.onGameButtonClick(THEME_FACES)

        });
        facesBtn.classList.add('.gameButton');

        let foodBtn = new GameButton(this, "FOOD", () => {

            this.onGameButtonClick(THEME_FOOD)

        });
        foodBtn.classList.add('.gameButton');

        let bodyBtn = new GameButton(this, "BODY", () => {

            this.onGameButtonClick(THEME_BODY)

        });
        bodyBtn.classList.add('.gameButton');

        let animalsBtn = new GameButton(this, "ANIMALS", () => {

            this.onGameButtonClick(THEME_ANIMALS)

        });
        animalsBtn.classList.add('.gameButton');

    }

    onGameButtonClick(theme) {

        this.controller.saveTheme(theme);

        let event = new CustomEvent('change-theme', {

            detail: {

                theme: theme

            },
            bubbles: true,
            cancelable: true,
            composed: false

        });
        this.dispatchEvent(event);

    }

}

customElements.define('theme-view', ThemeView);