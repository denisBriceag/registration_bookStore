import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor() {}
  formSwitcher: boolean = false;
  formState: Subject<string> = new Subject<string>();
  sectionName: string = 'registrationPannel';
  enteredNameHandler = new BehaviorSubject<string>('');

  onChangeSection(section: string) {
    this.sectionName = section;
  }

  switchToRegistration() {
    this.formSwitcher = !this.formSwitcher;
  }
}
