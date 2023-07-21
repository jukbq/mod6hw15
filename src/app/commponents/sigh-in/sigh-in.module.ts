import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SighInRoutingOdule } from './sigh-in.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SighInComponent } from './sigh-in.component';

@NgModule({
  declarations: [SighInComponent],
  imports: [CommonModule, SighInRoutingOdule, SharedModule],
})
export class SighInModule {}
