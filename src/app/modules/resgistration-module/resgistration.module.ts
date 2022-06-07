import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

import { FormComponent } from './form/form.component';
import { RegistrationComponent } from './registration.component';
import { LoginComponent } from './loginForm/login.component';

@NgModule({
  declarations: [RegistrationComponent, FormComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports: [RegistrationComponent],
})
export class ResgistrationModule {}
