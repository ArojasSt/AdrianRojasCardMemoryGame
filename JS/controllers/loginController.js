
import { Controller } from "./controller.js";
import { LoginView } from "../views/loginView.js";

export class LoginController extends Controller {

    constructor(parent) {

        super(parent);
        this.view = new LoginView(parent, this);

    }

    saveUserName(username) {

        localStorage.setItem('username', username);

    }

}