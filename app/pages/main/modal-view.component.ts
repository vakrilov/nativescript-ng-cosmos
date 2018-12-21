import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.component.html"
})
export class ModalViewComponent {
    constructor(private _params: ModalDialogParams) {

    }

    onClose(): void {
        this._params.closeCallback("return value");
    }
}
