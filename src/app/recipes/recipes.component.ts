import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() clickedItem: Recipe;

  detailsDisplayFlag= false;

  constructor() { }

  ngOnInit() {
  }

  onClickOfAnItem(clickedItem:Recipe){
    this.clickedItem = clickedItem;
    this.detailsDisplayFlag=true;
  }

}
