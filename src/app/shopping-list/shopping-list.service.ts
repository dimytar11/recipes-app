import { Ingredient } from './../model/ingredient';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Ham', 500),
    new Ingredient('Cheese', 100),
  ];
  ingredientAdded = new EventEmitter<Ingredient[]>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice())
  }
}
