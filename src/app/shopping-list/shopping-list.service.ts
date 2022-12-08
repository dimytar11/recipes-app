import { Ingredient } from './../model/ingredient';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Ham', 500),
    new Ingredient('Cheese', 100),
  ];

  ingredientAdded = new Subject<Ingredient[]>();


  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice())
  }
}
