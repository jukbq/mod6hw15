import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles.component';
import { CoodInfoComponent } from '../goods-page/good-info/good-info.component';

const routes: Routes = [
  { path: ': link', component: RolesComponent },
  {
    path: ': link/:id',
    component: CoodInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {}
