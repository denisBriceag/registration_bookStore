import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private dialog: MatDialog) {}

  openCartDialog() {
    this.dialog.open(CartDialogComponent, {
      disableClose: true,
    });
  }
}
