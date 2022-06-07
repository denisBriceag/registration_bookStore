import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../../../interfaces/form.interface';
import { Login } from 'src/app/interfaces/login.interface';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/interfaces/authresponse.interface';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  login(data: Login) {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
      AIzaSyBy2IXGq1wSIVVMTYnNF0wUvj2T6TlqSy8`,
      data
    );
  }

  register(data: Form) {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
      AIzaSyBy2IXGq1wSIVVMTYnNF0wUvj2T6TlqSy8`,
      data
    );
  }
}
