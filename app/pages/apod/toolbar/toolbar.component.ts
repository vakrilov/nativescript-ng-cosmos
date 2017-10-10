import { Component, Output, EventEmitter } from '@angular/core';
import { Button } from "ui/button";

@Component({
    selector: 'toolbar',
    moduleId: module.id,
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    goToPrevousDay() {
        this.notify.emit("goToPrevousDay");
    }

    goToNextDay() {
        this.notify.emit("goToNextDay");
    }

    onShare() {
        this.notify.emit("onShare");
    }

    onSetWallpaper() {
        this.notify.emit("onSetWallpaper");
    }

    // setUserInteraction(shareButton: Button, saveButton: Button, desktopButton: Button, state: boolean) {
    //     shareButton.isUserInteractionEnabled = state;
    //     saveButton.isUserInteractionEnabled = state;
    //     desktopButton.isUserInteractionEnabled = state;
    // }

    // setButtonsOpacity(shareButton: Button, saveButton: Button, desktopButton: Button, value: number) {
    //     saveButton.opacity = value;
    //     desktopButton.opacity = value;
    //     shareButton.opacity = value;
    // }
}