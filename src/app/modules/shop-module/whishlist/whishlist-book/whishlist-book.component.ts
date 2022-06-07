import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-whishlist-book',
  templateUrl: './whishlist-book.component.html',
  styleUrls: ['./whishlist-book.component.scss'],
})
export class WhishlistBookComponent implements OnInit {
  @Input() book: Book;
  isClicked = false;
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {}

  addToCart(isbn: number) {
    let selectedBook: Book;
    selectedBook = this.shopService.allBooks.find((el) => el.ISBN === isbn);
    selectedBook.qty = 1;
    this.shopService.selectedBooksArray.next(selectedBook);
    let i = this.shopService.booksForCheckout.value.findIndex(
      (el) => el.ISBN === selectedBook.ISBN
    );

    if (i < 0) {
      this.shopService.booksForCheckout.next([
        ...this.shopService.booksForCheckout.value,
        selectedBook,
      ]);
    } else {
      this.shopService.booksForCheckout.value[i].qty++;
    }
  }

  addToWhishlist(isbn: number) {
    let selectedBook: Book;
    selectedBook = this.shopService.allBooks.find((el) => el.ISBN === isbn);
    selectedBook.qty = 1;
    let i = this.shopService.whishlistBooks.value.findIndex(
      (el) => el.ISBN === selectedBook.ISBN
    );

    if (i < 0) {
      this.shopService.whishlistBooks.next([
        ...this.shopService.whishlistBooks.value,
        selectedBook,
      ]);
    } else {
      this.shopService.whishlistBooks.value[i].qty++;
    }
  }

  likeToggle(isbn: number) {
    this.isClicked = !this.isClicked;
    this.addToWhishlist(isbn);
  }
}
