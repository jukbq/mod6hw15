import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsPageRoutibgModule } from './goods-page-routibg.module';
import { SharedModule } from '../../shared/shared.module';
import { GoodsPageComponent } from './goods-page.component';
import { CoodInfoComponent } from './good-info/good-info.component';

@NgModule({
  declarations: [GoodsPageComponent, CoodInfoComponent],
  imports: [CommonModule, GoodsPageRoutibgModule, SharedModule],
})
export class GoodsPageModule {}
