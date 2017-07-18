import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {config} from '../../../environments/config';
import {AuthService} from '../../theme/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = fb.group({
      'email': ['user1@example.com', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['1234', Validators.compose([Validators.required, Validators.minLength(4)])],
      'remember': '',
    });
  }

  ngOnInit() {
    // console.log(config.url);
  }

  signIn() {
    // console.log(this.form.controls['email'].value);
    console.log(this.form.controls);
    if (this.form.valid) {
      this.authService.login(this.form.controls['email'].value, this.form.controls['password'].value).subscribe(
        rs => {
          console.log(rs);
          localStorage.setItem('token', rs.token);
          localStorage.setItem('user', rs.user);
          this.redirect();
        },
        err => console.log(err),
        () => console.log('Request Complete')
      );
    }
  }

  redirect() {
    if (this.authService.isLogined()) {
      this.router.navigate(['/pages']);
    }
  }
}
