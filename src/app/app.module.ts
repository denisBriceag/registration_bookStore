import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './modules/shop-module/shop.module';
import { ResgistrationModule } from './modules/resgistration-module/resgistration.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartDialogComponent } from './modules/shop-module/cart-dialog/cart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [CartDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    ResgistrationModule,
    NgbModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
