
import { BaseView } from "./baseView.js";
import { BackButton } from "./backButton.js";

export class CreditsView extends BaseView {

    constructor(parent, controller) {
        super(parent, controller);
        this.className = 'creditsView';

        // Agregar botón de regreso
        new BackButton(this, "Back", this.controller.handleBack.bind(this.controller));

        // Contenedor para los créditos
        const creditsContainer = document.createElement('div');
        creditsContainer.className = 'credits-container';
        this.appendChild(creditsContainer);

        h1({ innerHTML: 'EMOJI', className: 'home-menu-title' }, creditsContainer);

        const logo = img({

            src: "../../IMG/brainAsset1.png",
            alt: "Brain Logo",
            className: 'home-menu-logo'

        }, creditsContainer);

        h1({ innerHTML: 'MEMORY', className: 'home-menu-subtitle1' }, creditsContainer);
        h1({ innerHTML: 'GAME', className: 'home-menu-subtitle2' }, creditsContainer);

        // Agregar h1 con el nombre de la universidad
        const universityName = document.createElement('h1');
        universityName.textContent = 'Nombre de la Universidad';
        creditsContainer.appendChild(universityName);

        // Agregar h1 con el nombre del curso
        const courseName = document.createElement('h1');
        courseName.textContent = 'Nombre del Curso';
        creditsContainer.appendChild(courseName);

        // Agregar h1 con el nombre del estudiante
        const studentName = document.createElement('h1');
        studentName.textContent = 'Tu Nombre';
        creditsContainer.appendChild(studentName);
    }
}

customElements.define('credits-view', CreditsView);
