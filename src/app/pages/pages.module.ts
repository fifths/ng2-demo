import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './pages.routing';
import {NgAllModule} from '../theme/ngall.module';
import {PagesComponent} from './pages.component';
import {LoginGuard} from '../theme/services/login-guard.service';

@NgModule({
  imports: [
    CommonModule,
    NgAllModule,
    routing
  ],
  declarations: [PagesComponent],
  providers: [LoginGuard]
})
export class PagesModule {
}
