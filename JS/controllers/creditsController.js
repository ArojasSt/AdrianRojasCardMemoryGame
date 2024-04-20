
export class CreditsController {
    constructor(view, gameManager) {
        this.view = view;
        this.gameManager = gameManager;
        this.bindHandlers();
    }

    bindHandlers() {
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        this.gameManager.goto(MENU_STATE);
    }
}
