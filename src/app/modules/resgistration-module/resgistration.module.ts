import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

import { FormComponent } from './form/form.component';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [RegistrationComponent, FormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports: [RegistrationComponent],
})
export class ResgistrationModule {}
