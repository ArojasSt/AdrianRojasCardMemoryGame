
import { Controller } from "../controllers/controller.js";

import { ThemeView } from "../views/themesView.js";

export class ThemeController extends Controller {

    constructor(parent) {

        super(parent);
        this.view = new ThemeView(parent, this);

    }

    saveTheme(theme) {

        localStorage.setItem('theme', theme);

    }

}