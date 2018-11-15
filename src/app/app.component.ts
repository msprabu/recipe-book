import { Component } from '@angular/core';
import {RecipeService} from './recipes/recipe.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipeService]

})
export class AppComponent {
  title = 'Recipe-Book';

  displayOption = "recipe";

  constructor(private recipeService: RecipeService){}
  
  onHeaderClicked(displayOption){
    console.log("event triggered and display option: "+this.displayOption);
    this.displayOption=displayOption;
  }

}
