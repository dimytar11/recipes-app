import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes = [{ path: 'shopping-list', component: ShoppingListComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {}
