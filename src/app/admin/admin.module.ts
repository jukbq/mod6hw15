import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-rourouting.module';
import { AdminComponent } from './admin.component';
import { ActionComponent } from './action/action.component';
import { CategoriesComponent } from './categories/categories.component';
import { GoodsComponent } from './goods/goods.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AdminComponent,
    ActionComponent,
    CategoriesComponent,
    GoodsComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
     AdminRoutingModule, 
     SharedModule],
})
export class AdminModule {}
