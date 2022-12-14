import { Recipe } from 'src/app/model/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
