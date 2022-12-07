import { Ingredient } from './../model/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Ham', 5),
    new Ingredient('Cheese', 10),
  ];

  constructor() {}

  ngOnInit(): void {}
}
