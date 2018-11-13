import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
@Output() clickedOnItem = new EventEmitter<Recipe>()

  recipes: Recipe[]=[
    new Recipe('A test recipe 1','this is a test recipe', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg', ["Apple","Orange","Tomato"]),
    new Recipe('A test recipe 2','this is a test recipe', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg', ["Apple","Orange","Tomato"])
  ];

  toDisplayDetails(item){
    this.clickedOnItem.emit(item);
  }

  constructor() { }

  ngOnInit() {
  }

  

}
