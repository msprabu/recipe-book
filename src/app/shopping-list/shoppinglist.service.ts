import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService{

    ingredients: Ingredient[] =[
        new Ingredient('Apples', 5),
        new Ingredient('Oranges', 16)
      ];

      onCreateNewIngredient(newIngredient:Ingredient){
        this.ingredients.push(newIngredient);
    }
}