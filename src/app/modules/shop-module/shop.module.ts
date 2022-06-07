import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FilterComponent } from './main/filter/filter.component';
import { BookslistComponent } from './main/bookslist/bookslist.component';
import { BookComponent } from './main/bookslist/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from '../shop-module/services/json.service';
import { BrowserModule } from '@angular/platform-browser';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResgistrationModule } from '../resgistration-module/resgistration.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { CartBookComponent } from './cart-dialog/cart-book/cart-book.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './footer/footer.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { WhishlistBookComponent } from './whishlist/whishlist-book/whishlist-book.component';

@NgModule({
  entryComponents: [CartDialogComponent, CartBookComponent],
  declarations: [
    ShopComponent,
    NavbarComponent,
    MainComponent,
    FilterComponent,
    BookslistComponent,
    BookComponent,
    ShortenPipe,
    CartDialogComponent,
    CartBookComponent,
    FooterComponent,
    WhishlistComponent,
    WhishlistBookComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ResgistrationModule,
    RouterModule,
    ModalModule.forRoot(),
    MatDialogModule,
  ],
  providers: [JsonService],
  exports: [
    ShopComponent,
    NavbarComponent,
    MainComponent,
    FilterComponent,
    CartDialogComponent,
    FooterComponent,
  ],
})
export class ShopModule {}
