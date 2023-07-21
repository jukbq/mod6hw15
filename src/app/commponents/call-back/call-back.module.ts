import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallBackRoutingModule } from './call-back.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CallBackComponent } from './call-back.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CallBackComponent],
  imports: [CommonModule, CallBackRoutingModule, SharedModule, MatDialogModule],
  entryComponents: [CallBackComponent],
})
export class CallBackModule {}
