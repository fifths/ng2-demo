import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {config} from '../../../environments/config';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) {
  }

  login(email, password) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify({email: email, password: password});
    return this.http.post(config.url + '/api/login', body, options).map(response => response.json());
  }

  getUser() {
    return localStorage.getItem('user');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLogined(): boolean {
    return localStorage.getItem('user') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
