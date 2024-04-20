
import { HomeView } from "../views/homeMenuView.js";
import { Controller } from "./controller.js";

import { LOGIN_STATE, MENU_STATE } from '../../libs/constants.js';

export class HomeController extends Controller {

    constructor(parent) {
        super(parent);
        this.view = new HomeView(parent, this);
    }

    navigateToLogin() {
        let event = new CustomEvent('goto-state', {
            detail: {
                state: LOGIN_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false

        });
        this.view.dispatchEvent(event);
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