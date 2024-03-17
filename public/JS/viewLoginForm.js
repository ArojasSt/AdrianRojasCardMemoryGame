
class LoginFormView {

    constructor() {

        this.app = document.getElementById('app');

    }

    renderLoginForm() {

        this.app.innerHTML = `

            <h1> Ingresa tu nombre </h1>

            <form id = "loginForm">

                <input type = "text" id = "userNameInput" placeholder = "Nombre" required>
                
                <button type = "submit"> Ingresar </button>

            </form>

        `;

    }

    getUserName() {

        return document.getElementById('userNameInput').value;

    }
    
}
