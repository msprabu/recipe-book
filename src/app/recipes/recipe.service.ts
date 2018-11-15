import {Recipe} from '../recipes/recipe.model'
import { EventEmitter } from '@angular/core';

export class RecipeService{

      anItemIsClicked= new EventEmitter<Recipe>();

    recipes: Recipe[]=[
        new Recipe('A test recipe 1','this is a test recipe', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg', ["Apple","Orange","Tomato"]),
        new Recipe('A test recipe 2','this is a test recipe', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg', ["Apple","Orange","Tomato"])
      ];

      clickedItem: Recipe;

}