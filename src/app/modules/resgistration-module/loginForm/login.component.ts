import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from '../../shop-module/services/credential.service';
import { RegistrationService } from '../../shop-module/services/registration.service';
import { RouterService } from '../../shop-module/services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private routerService: RouterService,
    private credentialsService: CredentialsService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.registrationService
      .login({
        ...this.loginForm.value,
        returnSecureToken: true,
      })
      .subscribe(({ idToken }) => {
        this.routerService.enteredNameHandler.next(this.loginForm.value.email);
        this.credentialsService.setToken(idToken);
        this.router.navigate(['bookStore']);
      });
  }

  switchToRegistration() {
    this.router.navigate(['registrationPannel']);
  }
}
