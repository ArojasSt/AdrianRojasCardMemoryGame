
import { HOME_STATE } from "../../libs/constants.js";

export class LoadingService {

    constructor(controller) {

        this.controller = controller;
        this.getInitialData();

    }

    getInitialData() {

        window.setTimeout(() => {

            let event = new CustomEvent('goto-state', {

                detail: {

                    state: HOME_STATE

                },

                bubbles: true,
                cancelable: true,
                composed: false

            });

            this.controller.view.dispatchEvent(event);

        }, 2000);

    }

}