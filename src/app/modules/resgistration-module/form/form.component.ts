import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterService } from '../../shop-module/services/router.service';
import { Router } from '@angular/router';
import { RegistrationService } from '../../shop-module/services/registration.service';
// import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  registrationForm: FormGroup;
  forbiddenNamesArray: string[] = ['John', 'Stefan', 'Mike'];

  constructor(
    // private cdr: ChangeDetectorRef,
    private routerService: RouterService,
    private router: Router,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this)(),
      ]),
      age: new FormControl(null, Validators.pattern('[0-9]+')),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]+'),
      ]),
    });
  }

  forbiddenNames(): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {
      return !!this.forbiddenNamesArray.includes(control.value)
        ? { name_is_okay: true }
        : null;
    };
  }

  // forbiddenNames(control: FormControl): { [message: string]: boolean } {
  //   if (this.forbiddenNamesArray.indexOf(control.value) != -1) {
  //     return { this_name_is_gorbidden: true };
  //   }
  // }

  onSubmit() {
    // event.preventDefault();
    // this.cdr.detectChanges();
    this.routerService.enteredNameHandler.next(
      this.registrationForm.value.name
    );
    this.registrationService.postData(this.registrationForm.value);
    this.router.navigate(['bookStore']);
  }
}
