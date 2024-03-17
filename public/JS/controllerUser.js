
import User from '../JS/modelUser';

class UserController {

    constructor(view, loginFormView) {

        this.view = view;
        this.loginFormView = loginFormView

        this.view.app.addEventListener('click', this.handleButtonClick.bind(this));
        this.view.app.addEventListener('submit', this.handleFormSubmit.bind(this));

    }

    handleButtonClick(event) {

        if (event.target.id === 'menuButton') {

            // Meter Lógica para manejar el botón de Menu

            console.log('Se ingresó a las configuraciones principales.');

        } else if (event.target.id === 'loginButton') {

            console.log('Se ingresó al formulario "Login".');
            this.loginFormView.renderLoginForm();

        }

    }

    handleFormSubmit(event) {

        event.preventDefault();

        if (event.target.id === 'loginForm') {

            const username = this.loginFormView.getUserName();
            console.log('Se obtiene el nombre ingresado por el usuario.');

            const storedUserNames = localStorage.getItem('usernames');
            console.log('Se declara constante que verifica si existen valores en el local storage de usernames.');

            let usernames = []

            if (storedUserNames) {

                usernames = JSON.parse(storedUserNames);
                console.log('Se convierte la cadena JSON de usernames en una lista.');

                if (usernames.includes(username)) {

                    console.log('Se verificó que el username ya estaba almacenado.');
                    alert('Este nombre de usuario ya está en uso. Por favor, elija otro.')
                    return;

                }

            }

            usernames.push(username);
            console.log(`Se agregó el nuevo nombre de usuario "${username}" a la lista.`);

            console.log('Se guardó la lista actualizada de nombres en el local storage.');
            localStorage.setItem('usernames', JSON.stringify(usernames));

            console.log('Lista completa de nombres de usuario:', usernames);

            alert(`¡Bienvenido, ${username}!`)

        }

    }
    
}

export default UserController;
