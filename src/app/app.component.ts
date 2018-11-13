import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-Book';

  displayOption = "recipe";
  
  onHeaderClicked(displayOption){
    console.log("event triggered and display option: "+this.displayOption);
    this.displayOption=displayOption;
  }

}
