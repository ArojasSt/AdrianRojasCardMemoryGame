
import { Controller } from "./controller.js";
import { MenuView } from "../views/menuView.js";
import { PLAY_STATE, SCORES_STATE, DIFFICULTY_STATE, THEMES_STATE, CREDITS_STATE, HOME_STATE } from "../../libs/constants.js";

export class MenuController extends Controller {

    constructor(parent) {

        super(parent);
        this.view = new MenuView(parent, this);

    }

    handleBack() {

        let event = new CustomEvent('goto-state', {
            detail: {
                state: HOME_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false

        });
        this.view.dispatchEvent(event);
        
    }

    handlePlay() {

        let event = new CustomEvent('goto-state', {
            detail: {
                state: PLAY_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false

        });
        this.view.dispatchEvent(event);

    }

    handleScores() {

        let event = new CustomEvent('goto-state', {
            detail: {
                state: SCORES_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false

        });
        this.view.dispatchEvent(event);

    }

    handleDifficulty() {

        let event = new CustomEvent('goto-state', {
            detail: {
                state: DIFFICULTY_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false

        });
        this.view.dispatchEvent(event);

    }

    handleThemes() {

        let event = new CustomEvent('goto-state', {
            detail: {
                state: THEMES_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false

        });
        this.view.dispatchEvent(event);

    }

    handleCredits() {

        let event = new CustomEvent('goto-state', {
            detail: {
                state: CREDITS_STATE
            },
            bubbles: true,
            cancelable: true,
            composed: false

        });
        this.view.dispatchEvent(event);
    }


}