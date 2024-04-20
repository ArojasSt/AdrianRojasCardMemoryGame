
import { Controller } from "./controller.js";

import { LevelView } from "../views/levelView.js";

import { MENU_STATE } from "../../libs/constants.js";

export class LevelController extends Controller {

    constructor(parent) {

        super(parent);
        this.view = new LevelView(parent, this);

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