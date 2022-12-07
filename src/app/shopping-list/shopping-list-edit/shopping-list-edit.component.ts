import { ShoppingListService } from './../shopping-list.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const newIngredient = new Ingredient(
      this.name.nativeElement.value,
      this.amount.nativeElement.value
    );
    this.slService.addIngredient(newIngredient);
  }
}
