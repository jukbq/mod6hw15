import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCabinetComponent } from './user-cabinet.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PasswordChangeComponent } from './password-change/password-change.component';



const routes: Routes = [

  {
    path: '', component: UserCabinetComponent,  children:[
      { path: 'personalData', component: PersonalDataComponent },
      { path: 'orderHistory', component: OrderHistoryComponent },
      { path: 'passwordChange', component: PasswordChangeComponent },
      { path: '', pathMatch: 'full', redirectTo: 'personalData' }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  UserCabinetRoutingModule { }
