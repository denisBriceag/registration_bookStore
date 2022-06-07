import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from '../../../../interfaces/book.interface';

@Component({
  selector: 'app-cart-book',
  templateUrl: './cart-book.component.html',
  styleUrls: ['./cart-book.component.scss'],
})
export class CartBookComponent implements OnInit {
  control: FormControl;
  @Input()
  book: Book;
  constructor() {}

  ngOnInit(): void {
    console.log(this.book.qty);

    this.control = new FormControl(this.book.qty);
  }
}
