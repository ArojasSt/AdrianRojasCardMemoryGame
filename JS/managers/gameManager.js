import { div, img } from '../../libs/html.js';
import { span } from '../../libs/html.js';

import { LoadingController } from '../controllers/loadingController.js';
import { HomeController } from '../controllers/homeMenuController.js';
import { MenuController } from '../controllers/menuController.js';

import { HOME_STATE, MENU_STATE, CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, SCORES_STATE, THEMES_STATE, PLAY_STATE, RESULTS_STATE, LOADING_STATE } from '../../libs/constants.js';

import { PlayController } from '../controllers/playController.js';
import { CreditsController } from '../controllers/creditsController.js';
import { LevelController } from '../controllers/levelController.js';

export class GameManager {

    constructor() {

        this.mainContainer = div({ className: "mainContainer" }, document.body);
        this.contentContainer = div({ className: "contentContainer" }, this.mainContainer);
        this.currentController = null;

        //EventListeners
        this.mainContainer.addEventListener("loading-completed", (event) => {
            this.loadingCompleted();
        });

        this.mainContainer.addEventListener("update-play-game-time", (event) => {
            this.timeLbl.innerHTML = event.detail.time;
        });

        this.mainContainer.addEventListener("update-clicks", (event) => {
            this.clicksLbl.innerHTML = event.detail.clicks;
        });

        this.mainContainer.addEventListener("goto-state", (event) => {
            this.goto(event.detail.state);
        });

        this.currentController = new LoadingController(this.contentContainer);
    }

    goto(state) {

        if (this.currentController !== null) {
            this.currentController.delete();
            this.currentController = null;
        }

        switch (state) {

            case LOADING_STATE:
                this.currentController = new LoadingController(this.contentContainer);
                break;
            case HOME_STATE:
                this.appTitle.innerHTML = 'HOME';
                this.currentController = new HomeController(this.contentContainer);
                break;
            case MENU_STATE:
                this.appTitle.innerHTML = 'MENU';
                this.currentController = new MenuController(this.contentContainer);
                break;
            case LOGIN_STATE:
                this.appTitle.innerHTML = 'LOGIN';
                break;
            case SCORES_STATE:
                this.appTitle.innerHTML = 'SCORES';
                break;
            case CREDITS_STATE:
                this.appTitle.innerHTML = 'CREDITS';
                this.currentController = new CreditsController(this.contentContainer);
                break;
            case THEMES_STATE:
                this.appTitle.innerHTML = 'THEMES';
                break;
            case DIFFICULTY_STATE:
                this.appTitle.innerHTML = 'DIFFICULTY';
                this.currentController = new LevelController(this.contentContainer);
                break;
            case RESULTS_STATE:
                this.appTitle.innerHTML = 'RESULTS';
                break;
            case PLAY_STATE:
                this.appTitle.innerHTML = 'PLAY';
                this.currentController = new PlayController(this.contentContainer);
                break;
            default:
                this.currentController = new LoadingController(this.contentContainer);
                break;

        }

    }

    loadingCompleted() {
        this.currentController.delete();
    }

    onBackBtn() {
        if (state === LOGIN_STATE ||
            state === SCORES_STATE ||
            state === DIFFICULTY_STATE ||
            state === THEMES_STATE ||
            state === CREDITS_STATE) {
            this.goto(MENU_STATE);
        } else {
            this.goto(HOME_STATE);
        }
    }





    onResetBtn() {
        this.timeLbl.innerHTML = 0;
        this.clicksLbl.innerHTML = 0;
        this.goto(PLAY_STATE);
    }
}


