
import { HomeView } from "../views/homeMenuView.js";
import { Controller } from "./controller.js";

import { LOGIN_STATE, MENU_STATE } from '../../libs/constants.js';

export class HomeController extends Controller {

    constructor(parent) {
        super(parent);
        this.view = new HomeView(parent, this);
    }

    navigateToLogin() {
        this.controller.goto(LOGIN_STATE);
    }

    navigateToMenu() {
        let event = new CustomEvent('goto-state', {
            detail: {
                state: MENU_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false

        });
        this.view.dispatchEvent(event);
    }

}