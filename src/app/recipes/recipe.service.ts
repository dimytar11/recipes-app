import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Super tasty burger',
      'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg',
      [
        new Ingredient('Ham', 200),
        new Ingredient('Cheese', 300),
        new Ingredient('Salad', 50),
      ]
    ),
    new Recipe(
      'Pizza',
      'The most delicious pizza',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [
        new Ingredient('Ham', 200),
        new Ingredient('Cheese', 300),
        new Ingredient('Tomatoes', 500),
      ]
    ),
    new Recipe(
      'Chicken soup',
      'Perfect for starter',
      'https://www.seriouseats.com/thmb/2nouHHsjM0bN1vwXMOZGUkLFsJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg',
      [
        new Ingredient('Chicken', 400),
        new Ingredient('Potatoes', 300),
        new Ingredient('Onion', 200),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
