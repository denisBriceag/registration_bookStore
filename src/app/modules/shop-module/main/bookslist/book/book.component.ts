import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
import { ShopService } from '../../../services/shop.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  isClicked = false;
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {}

  addToCart(isbn: number) {
    let selectedBook: Book;
    selectedBook = this.shopService.allBooks.find((el) => el.ISBN === isbn);
    this.shopService.selectedBooksArray.next(selectedBook);
    this.shopService.booksForCheckout.next([
      ...this.shopService.booksForCheckout.value,
      selectedBook,
    ]);
  }

  likeToggle() {
    this.isClicked = !this.isClicked;
  }
}
