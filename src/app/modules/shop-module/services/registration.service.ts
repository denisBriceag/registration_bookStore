import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../../../interfaces/form.interface';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  postData(data: Form) {
    return this.http
      .put(
        'https://book-shop-f93d1-default-rtdb.firebaseio.com/books.json',
        data
      )
      .subscribe((res) => console.log(res));
  }
}
