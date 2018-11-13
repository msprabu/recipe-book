import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() newIngredient: Ingredient;

  ingredients: Ingredient[] =[
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 16)
  ];

  constructor() { }

  ngOnInit() {
  }

  onCreateNewIngredient(newIngredient:Ingredient){
      this.ingredients.push(newIngredient);
  }

}
