import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss'],
})
export class WhishlistComponent implements OnInit {
  public books: Book[];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.books = this.shopService.whishlistBooks.value;
  }
}
