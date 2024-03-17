
class UserView {

    constructor() {

        this.app = document.getElementById('app');

    }

    renderMainScreen() {

        this.app.innerHTML = `

            <h1> Bienvenido al Juego de Memoria </h1>
            <button id = "menuButton"> Menu </button>
            <button id = "loginButton"> Login </button>

        `;

    }

}
