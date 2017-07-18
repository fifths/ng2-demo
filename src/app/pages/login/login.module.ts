import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgAllModule} from '../../theme/ngall.module';
import {LoginComponent} from './login.component';
import {routing} from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgAllModule,
    routing
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
