import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserCabinetComponent } from './user-cabinet.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { UserCabinetRoutingModule } from './user-cabinet-routing.module';





@NgModule({
  declarations: [
    UserCabinetComponent,
    OrderHistoryComponent,
    PasswordChangeComponent,
    PersonalDataComponent,

  ],
  imports: [
    CommonModule,
    UserCabinetRoutingModule,
    SharedModule
  ]
})
export class UserCabinetModule { }
