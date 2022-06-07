import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CredentialsService } from '../../services/credential.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    public credentialsService: CredentialsService,
    public router: Router
  ) {}
  canActivate(): boolean {
    if (
      !this.credentialsService.accessToken ||
      this.credentialsService.accessToken === 'null'
    ) {
      this.router.navigate(['logInPannel']);
      return false;
    }
    return true;
  }
}
