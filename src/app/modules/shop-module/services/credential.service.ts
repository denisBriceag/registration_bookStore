import { EventEmitter, Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  public authChangeEvent = new EventEmitter<boolean>();

  constructor(private storageService: StorageService) {}

  get accessToken() {
    return this.storageService.getLocalItem('token');
  }

  setToken(token: string) {
    this.storageService.setLocalItem('token', token);
    this.authChangeEvent.emit();
  }

  removeToken() {
    this.storageService.removeLocalItem('token');
  }
}
