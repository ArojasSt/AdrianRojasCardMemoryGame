
import { Controller } from "../controllers/controller.js";
import { CreditsView } from "../views/creditsView.js";

import { MENU_STATE } from "../../libs/constants.js";


export class CreditsController extends Controller {

    constructor(parent) {

        super(parent);
        this.view = new CreditsView(parent, this);

    }

    handleBack() {
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
