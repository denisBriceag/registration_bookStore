import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setLocalItem(key: string, value: any): any {
    localStorage.setItem(key, value);
  }

  getLocalItem(key: string): any {
    return localStorage.getItem(key);
  }

  removeLocalItem(key: string): any {
    localStorage.removeItem(key);
  }
}
