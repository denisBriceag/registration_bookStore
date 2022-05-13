import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Book } from '../../../interfaces/book.interface';
import { Subject, takeUntil } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss'],
})
export class CartDialogComponent implements OnInit, OnDestroy {
  selectedBooks: Book[];
  destroy$: Subject<void> = new Subject<void>();

  constructor(private shopService: ShopService, private modalRef: BsModalRef) {}

  public onClose() {
    this.modalRef.hide();
  }

  ngOnInit(): void {
    console.log(this.shopService.booksForCheckout.value);

    this.selectedBooks = this.shopService.booksForCheckout.value;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
