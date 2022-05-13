import { Component, OnInit } from '@angular/core';
import { RouterService } from './modules/shop-module/services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sectionName = 'registrationPannel';

  constructor(private routerService: RouterService) {}

  ngOnInit(): void {
    this.routerService.sectionName = this.sectionName;
  }
}
