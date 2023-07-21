import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./commponents/sigh-in/sigh-in.module').then(m => m.SighInModule)
  },

  {
    path: 'callMe',
    loadChildren: () => import('./commponents/call-back/call-back.module').then(m => m.CallBackModule)
  },

  {
    path: 'user-cabinet',
     loadChildren: () => import('./user-cabinet/user-cabinet.module').then(m => m.UserCabinetModule)
  },

  {
    path: 'action',
    loadChildren: () => import('./pages/actions/actions.module').then(m => m.ActionsModule)
  },
  {
    path: 'goodsPage',
    loadChildren: () => import('./pages/goods-page/goods-page.module').then(m => m.GoodsPageModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
