import { div, img } from '../../libs/html.js';
import { span } from '../../libs/html.js';

import { LoadingController } from '../controllers/loadingController.js';
import { HomeController } from '../controllers/homeMenuController.js';
import { MenuController } from '../controllers/menuController.js';

import { HOME_STATE, MENU_STATE, CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, SCORES_STATE, THEMES_STATE, LOADING_STATE } from '../../libs/constants.js';

import { PlayController } from '../controllers/playController.js';

export class GameManager {

    constructor() {

        this.mainContainer = div({ className: "mainContainer" }, document.body);
        this.contentContainer = div({ className: "contentContainer" }, this.mainContainer);
        this.currentController = null;

        this.backBtn = div({ className: '.navbarContainer-backBtn' }, this.navbarContainer)
        img({ className: '.navbarContainer-backArrow' }, this.backBtn);
        this.appTitle = span({ className: 'navbarContainer-title', innerHTML: 'NAVBAR' }, this.navbarContainer);

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
        // this.currentController = new HomeController(this.contentContainer);
        console.log('HOLA');
    }

    goto(state) {

        if (this.currentController !== null) {
            this.currentController.delete();
            this.currentController = null;
        }

        if (state === MENU_STATE ||
            state === LOGIN_STATE ||
            state === SCORES_STATE ||
            state === DIFFICULTY_STATE ||
            state === THEMES_STATE ||
            state === CREDITS_STATE) {

            this.backBtn.classList.remove('hidden');

        } else {
            this.backBtn.classList.add('hidden');
        }

        switch (state) {
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
                break;
            case THEMES_STATE:
                this.appTitle.innerHTML = 'THEMES';
                break;
            case DIFFICULTY_STATE:
                this.appTitle.innerHTML = 'DIFFICULTY';
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


