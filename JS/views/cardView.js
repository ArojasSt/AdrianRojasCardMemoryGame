
import { img } from "../../libs/html.js";
import { BaseView } from "./baseView.js";

export class CardView extends BaseView {

    constructor(parent, card, callback = null) {

        super(parent);
        this.card = card;
        this.className = "cardView";
        this.innerHTML = card.emoji;

        this.onclick = () => {

            if (callback !== null) {

                this.card.isSelected = true;
                callback(this.card);

            }

        }

        window.addEventListener("show-card", (event) => {

            if(this.card.isSelected) {

                this.show();

            }

        });

        this.image = img({src: `../../${this.card.emoji}.png`}, this);

    }

    show() {

        gsap.to(this, { rotationY: 180, duration: 1, ease: "expo.in", onComplete: () => {

            if (this.card.isImage) {

                this.image.classList.remove('hidden');
    
            } else {
    
                this.innerHTML = this.card.emoji;
    
            }

        } });

    }

    hide() {

        this.card.isSelected = false;

        gsap.to(this, { rotationY: 0, duration: 1, ease: "expo.in", onComplete: () => {

            if (this.card.isImage) {

                this.image.classList.remove('hidden');
    
            } else {
    
                this.innerHTML = this.card.emoji;
    
            }

        } });

    }

    reset() {

        if (this.card.isDiscovered) {

            gsap.to(this.image, {duration: 0.1, ease: "bounce.out", scale: 1.1, yoyo: true, repeat: 5});
            this.classList.add('cardView-discovered');

        } else {

            this.hide()

        }

    }

}

customElements.define('card-view', CardView);