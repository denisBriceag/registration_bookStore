import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/resgistration-module/registration.component';
import { CartDialogComponent } from './modules/shop-module/cart-dialog/cart-dialog.component';
import { MainComponent } from './modules/shop-module/main/main.component';
import { ShopComponent } from './modules/shop-module/shop.component';

const routes: Routes = [
  {
    path: 'registrationPannel',
    component: RegistrationComponent,
  },
  {
    path: 'bookStore',
    component: MainComponent,
    children: [{ path: 'cart', component: CartDialogComponent }],
  },
  { path: '', redirectTo: 'registrationPannel', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
