
import { BaseView } from "./baseView.js";
import { GameButton } from "./gameButton.js";

import { span } from "../../libs/html.js";
import { img } from "../../libs/html.js";
import { div } from "../../libs/html.js";
import { input } from "../../libs/html.js";

import { MENU_STATE } from "../../libs/constants.js";

export class LoginView extends BaseView {

    constructor(parent, controller) {

        super(parent, controller);

        this.className = "loginView";

        const container = div({ className: 'login-menu-container' }, this);

        h1({ innerHTML: 'EMOJI', className: 'home-menu-title' }, container);

        const logo = img({

            src: "../../IMG/brainAsset1.png",
            alt: "Brain Logo",
            className: 'home-menu-logo'

        }, container);

        h1({ innerHTML: 'MEMORY', className: 'home-menu-subtitle1' }, container);
        h1({ innerHTML: 'GAME', className: 'home-menu-subtitle2' }, container);

        span({ className: 'loginView-title', innerHTML: 'Input Your User Name' })

        this.userNameIn = input({ className: 'loginView-userNameIn' }, this);

        let saveBtn = new GameButton(this, 'SAVE', () => { this.onGameButtonClick() });
        saveBtn.classList.add('gameButton');

    }

    onGameButtonClick() {

        let username = this.userNameIn.value;

        if (username !== '') {

            this.controller.saveUserName(username);

            let event = new CustomEvent('goto-state', {
                detail: {
                    state: MENU_STATE
                },
                bubbles: true,
                cancelable: true,
                composed: false

            });
            this.view.dispatchEvent(event);

        } else {

            alert('Please add a username!');

        }

    }

}

customElements.define('login-view', LoginView);