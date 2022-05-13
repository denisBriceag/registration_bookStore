import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../../interfaces/book.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private response: HttpClient) {}

  public getResponse(): Observable<Book[]> {
    return this.response.get<Book[]>('/assets/books.json');
  }
}
