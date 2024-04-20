
import { div } from "../../libs/html.js";

import { BaseView } from "./baseView.js";
import { CardView } from "./cardView.js"

import { BackButton } from "./backButton.js";

export class PlayView extends BaseView {

    constructor(parent, controller) {

        super(parent, controller);
        this.className = 'playView';

        const backButton = new BackButton(this, '', () => {

            controller.handleBack();

        });

        this.insertBefore(backButton, this.firstChild);

        this.cardsContainer = div({ className: 'playView-cardsContainer'}, this);
        this.cardViews = [];

    }

    showCards(cards) {

        cards.forEach((card, i) => {

            card.id = i;

            this.cardViews.push(new CardView(this.cardsContainer, card, this.onCardSelected.bind(this)));
            
        });

    }

    onCardSelected(cardSelected) {

        this.controller.onCardSelection(cardSelected);

    }

    resetCards() {

        this.cardViews.forEach(cardView => {

            cardView.reset();

        })

    }

}

customElements.define('play-view', PlayView)