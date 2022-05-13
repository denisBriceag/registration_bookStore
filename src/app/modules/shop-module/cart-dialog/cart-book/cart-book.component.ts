import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../../interfaces/book.interface';

@Component({
  selector: 'app-cart-book',
  templateUrl: './cart-book.component.html',
  styleUrls: ['./cart-book.component.scss'],
})
export class CartBookComponent implements OnInit {
  @Input()
  book: Book;
  constructor() {}

  ngOnInit(): void {}
}
