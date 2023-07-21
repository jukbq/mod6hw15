import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CoodInfoComponent } from '../goods-page/good-info/good-info.component';

const routes: Routes = [
  { path: ':all', component: HomeComponent },
  {
    path: ':link/:id',
    component: CoodInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
