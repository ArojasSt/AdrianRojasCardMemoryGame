
import { Controller } from "./controller.js";
import { LoadingView } from "../views/loadingView.js";
import { LoadingService } from "../services/loadingService.js";

export class LoadingController extends Controller {

    constructor(parent) {

        super(parent);
        this.view = new LoadingView(parent);
        this.service = new LoadingService(this);

    }

}