import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientAdded.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    });
  }
}
