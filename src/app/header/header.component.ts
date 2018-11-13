import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() headerClicked = new EventEmitter<string>();

    onMenuItemClick(displayOption: string){
        console.log("Triggered");
           this.headerClicked.emit(displayOption);
    }



}