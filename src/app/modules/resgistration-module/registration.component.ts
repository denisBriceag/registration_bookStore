import { Component, OnInit } from '@angular/core';
import { RouterService } from '../shop-module/services/router.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  formSwitcher: boolean = false;

  constructor(private routerService: RouterService) {}

  ngOnInit(): void {
    this.formSwitcher = this.routerService.formSwitcher;
  }
}
