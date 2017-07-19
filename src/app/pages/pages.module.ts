import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './pages.routing';
import {NgAllModule} from '../theme/ngall.module';
import {PagesComponent} from './pages.component';
import {LoginGuard} from '../theme/services/login-guard.service';
import {HttpService} from '../theme/services/http.service';

@NgModule({
  imports: [
    CommonModule,
    NgAllModule,
    routing
  ],
  declarations: [PagesComponent],
  providers: [LoginGuard, HttpService]
})
export class PagesModule {
}
