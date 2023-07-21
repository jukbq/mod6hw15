import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsPageComponent } from './goods-page.component';

const routes: Routes = [
  { path: ':linnk', component: GoodsPageComponent },
  {
    path: ':linnk/: id',
    component: GoodsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsPageRoutibgModule {}
