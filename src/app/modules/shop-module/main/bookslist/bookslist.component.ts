import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
import { JsonService } from '../../services/json.service';
import { ShopService } from '../../services/shop.service';
import { Subject, takeUntil } from 'rxjs';
// import * as bookss from '../../books';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.scss'],
})
export class BookslistComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject<void>();

  public books: Book[];

  constructor(
    private shopService: ShopService,
    private jsonService: JsonService
  ) {}

  ngOnInit(): void {
    console.log(this.books);
    this.jsonService
      .getResponse()
      .pipe(takeUntil(this.destroy$))
      .subscribe((books: Book[]) => {
        this.shopService.allBooks = books;
        this.shopService.booksArray.next(books);
      });

    this.shopService.booksArray
      .pipe(takeUntil(this.destroy$))
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
