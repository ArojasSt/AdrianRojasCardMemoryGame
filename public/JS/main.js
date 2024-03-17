
import UserController from '../JS/controllerUser';

document.addEventListener('DOMContentLoaded', () => {

    const view = new UserView();
    const loginFormView = new LoginFormView(); 
    const controller = new UserController(view, loginFormView); 

    view.renderMainScreen();

});
