import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SighInComponent } from './sigh-in.component';

const routes: Routes = [{ path: '', component: SighInComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SighInRoutingOdule {}
