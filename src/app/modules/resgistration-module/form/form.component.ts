import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from './validators';
import { RouterService } from '../../shop-module/services/router.service';
import { Router } from '@angular/router';
import { RegistrationService } from '../../shop-module/services/registration.service';
import { CredentialsService } from '../../shop-module/services/credential.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, Subject, takeUntil, throwError } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup;
  destroy$: Subject<void> = new Subject();
  badResponse: boolean = false;
  constructor(
    private fb: FormBuilder,
    private routerService: RouterService,
    private router: Router,
    private registrationService: RegistrationService,
    private credentialsService: CredentialsService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        name: [null, [Validators.required]],
        age: [null, Validators.pattern('[0-9]+')],
        email: [
          null,
          [
            Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
            Validators.email,
          ],
        ],
        password: [null, Validators.required],
        confirmPassword: [null, Validators.required],
      },
      {
        validator: mustMatch('password', 'confirmPassword'),
      }
    );
  }

  switchToLogin() {
    this.router.navigate(['logInPannel']);
  }

  onSubmit() {
    this.routerService.enteredNameHandler.next(
      this.registrationForm.value.name
    );
    this.registrationService
      .register(this.registrationForm.value)
      .pipe(
        catchError(() => {
          throw (
            (new Error('This user already exists'), takeUntil(this.destroy$))
          );
        })
      )
      .subscribe(({ idToken }) => {
        console.log('successful attempt');
        this.router.navigate(['bookStore']);
        this.credentialsService.setToken(idToken);
      }),
      (err: HttpErrorResponse) => {
        if (err?.error?.error?.message === 'USER_NOT_FOUND') {
          this.badResponse = true;
        }
      };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
