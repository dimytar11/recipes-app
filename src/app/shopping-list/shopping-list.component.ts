
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import { Subscription } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private idChangeSub: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.idChangeSub = this.slService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }
}
