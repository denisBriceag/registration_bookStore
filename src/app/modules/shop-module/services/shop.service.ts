import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Book } from 'src/app/interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  allBooks: Book[];
  booksArray = new BehaviorSubject<Book[]>([]);
  selectedBooksArray = new Subject<Book>();
  booksForCheckout = new BehaviorSubject<Book[]>([]);
  whishlistBooks = new BehaviorSubject<Book[]>([]);

  searchByTitle(val: string) {
    let filteredBooks = this.allBooks.filter(
      (el) => el.title.indexOf(val) !== -1
    );
    this.booksArray.next(filteredBooks);
  }

  filterByAuthor(author: string) {
    let filteredBooks = this.allBooks.filter((el) => el.author === author);
    this.booksArray.next(filteredBooks);
  }

  filterByPrice(a: number, b: number) {
    let filteredBooks = this.allBooks.filter(
      (el) => el.price.value > a && el.price.value < b
    );
    this.booksArray.next(filteredBooks);
  }

  searchById(input: string) {
    let filteredBooks = this.allBooks.filter((el) => el.ISBN === Number(input));
    this.booksArray.next(filteredBooks);
  }
}
