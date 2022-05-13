import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor() {}
  sectionName: string = 'registrationPannel';
  enteredNameHandler = new BehaviorSubject<string>('');

  onChangeSection(section: string) {
    this.sectionName = section;
  }
}
