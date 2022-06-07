import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Book } from '../../../interfaces/book.interface';
import { RouterService } from '../services/router.service';
import { Subject, takeUntil } from 'rxjs';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CredentialsService } from '../services/credential.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('search') searchElement: ElementRef;
  destroy$: Subject<void> = new Subject<void>();
  focus: boolean = false;
  pageName: string = '';
  selectedBooks: Book[] = [];
  isRegistered: boolean = false;
  private modalRef: BsModalRef;

  constructor(
    private shopService: ShopService,
    private routingService: RouterService,
    private modalService: BsModalService,
    private credentialsService: CredentialsService
  ) {}

  get isToken() {
    return this.credentialsService.accessToken;
  }

  ngOnInit(): void {
    this.shopService.selectedBooksArray
      .pipe(takeUntil(this.destroy$))
      .subscribe((item) => {
        console.log(item);
        this.selectedBooks.push(item);
      });
    if (this.routingService.enteredNameHandler.value) {
      return;
    } else
      this.routingService.enteredNameHandler.subscribe(
        (name) => (this.pageName = name)
      );
  }

  openCart() {
    this.modalRef = this.modalService.show(CartDialogComponent);
  }

  searchByTitle(search: HTMLInputElement) {
    this.shopService.searchByTitle(search.value);
  }

  onChangeRoute(pageType: string) {
    this.routingService.onChangeSection(pageType);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
