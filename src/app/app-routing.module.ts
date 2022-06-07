import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './modules/resgistration-module/form/form.component';
import { LoginComponent } from './modules/resgistration-module/loginForm/login.component';
import { CartDialogComponent } from './modules/shop-module/cart-dialog/cart-dialog.component';
import { AuthGuard } from './modules/shop-module/main/guards/auth.guard';
import { MainComponent } from './modules/shop-module/main/main.component';
import { WhishlistComponent } from './modules/shop-module/whishlist/whishlist.component';

const routes: Routes = [
  {
    path: 'registrationPannel',
    component: FormComponent,
  },
  {
    path: 'logInPannel',
    component: LoginComponent,
  },
  {
    path: 'bookStore',
    component: MainComponent,
    children: [{ path: 'cart', component: CartDialogComponent }],
    canActivate: [AuthGuard],
  },
  {
    path: 'whishlist',
    component: WhishlistComponent,
  },
  { path: '', redirectTo: 'logInPannel', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
