export class PlayService {
    constructor(controller) {
        this.controller = controller;
        this.getData();
    }

    getData() {
        fetch('http://localhost:4000/cards/4/faces').then(resposnse => {
<<<<<<< HEAD

=======
>>>>>>> 48d25389ae9dbe62352be7b1fcffdeecb2ff755a
            resposnse.json().then(data => {
                this.controller.show(data.cards);
            }).catch(error => {
                console.log(error);
            });
        }).catch(error => {
            console.log(error);
        });
    }
}