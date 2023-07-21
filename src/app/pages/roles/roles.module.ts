import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutingModule } from './role-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RolesComponent } from './roles.component';

@NgModule({
  declarations: [RolesComponent],
  imports: [CommonModule, RoleRoutingModule, SharedModule],
})
export class RolesModule {}
