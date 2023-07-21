import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ActionComponent } from './action/action.component';
import { CategoriesComponent } from './categories/categories.component';
import { GoodsComponent } from './goods/goods.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'action', component: ActionComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'goods', component: GoodsComponent },
      { path: 'order', component: OrderComponent },
      { path: '', pathMatch: 'full', redirectTo: 'action' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
