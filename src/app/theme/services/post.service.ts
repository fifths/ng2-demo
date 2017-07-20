import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {config} from '../../../environments/config';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {HttpService} from './http.service';

@Injectable()
export class PostService {

  constructor(private router: Router, private httpService: HttpService) {
  }

  list() {
    this.httpService.setDefaultHeader();
    this.httpService.setToken();
    return this.httpService.get(config.url + '/api/post').map(response => response);
  }
}
