
import { Controller } from "./controller.js";
import { MenuView } from "../views/menuView.js";
import { PLAY_STATE, SCORES_STATE, DIFFICULTY_STATE, THEMES_STATE, CREDITS_STATE } from "../../libs/constants.js";

export class MenuController extends Controller {

    constructor(parent) {

        super(parent);
        this.view = new MenuView(parent, this);

    }

    handleBack() {

        console.log('Going back to main menu...');
        this.goto(HOME_STATE);
        
    }

    handlePlay() {

        console.log('Going to play state...');
        this.goto(PLAY_STATE);

    }

    handleScores() {

        console.log('Going to scores state...');
        this.goto(SCORES_STATE);

    }

    handleDifficulty() {

        console.log('Going to difficulty state...');
        this.goto(DIFFICULTY_STATE);

    }

    handleThemes() {

        console.log('Going to themes state...');
        this.goto(THEMES_STATE);

    }

    handleCredits() {

        console.log('Going to credits state...');
        this.goto(CREDITS_STATE);

    }

}