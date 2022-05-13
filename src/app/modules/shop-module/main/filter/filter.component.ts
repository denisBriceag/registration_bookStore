import { Component, OnDestroy, OnInit } from '@angular/core';
import { distinct, map, pluck, takeUntil } from 'rxjs';
import { Book } from 'src/app/interfaces/book.interface';
import { ShopService } from '../../services/shop.service';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  constructor(private shopService: ShopService) {}
  destroy$: Subject<void> = new Subject<void>();
  arrOfAuthors: string[] = [];
  isbnValue = new FormControl('');

  ngOnInit(): void {
    this.shopService.booksArray
      .pipe(
        map((books: Book[]) => books.map((el) => el.author)),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        if (this.arrOfAuthors.length) {
          return;
        }
        console.log(res);

        this.arrOfAuthors = res
          .filter((val, index, arr) => arr.indexOf(val) === index)
          .sort();
      });
  }

  filterByAuthor(author: string) {
    this.shopService.filterByAuthor(author);
  }

  onChoosePrice(a: number, b: number) {
    // let arrOfNums: number[];
    // console.log((event.target as HTMLInputElement).value);

    // (event.target as HTMLInputElement).value
    //   .split('')
    //   .map((el) =>
    //     typeof el === 'number' ? arrOfNums.push(el) : console.log(el)
    //   );
    this.shopService.filterByPrice(a, b);
  }

  searchById() {
    this.shopService.searchById(this.isbnValue.value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
