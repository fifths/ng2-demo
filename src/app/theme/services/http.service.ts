import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Jsonp, Response, RequestOptionsArgs} from '@angular/http';

@Injectable()
export class HttpService {

  private http_options;

  constructor(private http: Http) {
    this.http_options = new RequestOptions({});
  }

  // get
  get(url: string, options?: RequestOptionsArgs) {
    return this.http.get(url, this.http_options).map(response => response.json());
  }

  // post
  post(url: string, body: any, options?: RequestOptionsArgs) {
    return this.http.post(url, body, this.http_options).map(response => response.json());
  }

  // put
  put(url: string, body: any, options?: RequestOptionsArgs) {
    return this.http.put(url, body, this.http_options).map(response => response.json());
  }

  // patch
  patch(url: string, body: any, options?: RequestOptionsArgs) {
    return this.http.patch(url, body, this.http_options).map(response => response.json());
  }

  // delete
  delete(url: string, options?: RequestOptionsArgs) {
    return this.http.delete(url, this.http_options).map(response => response.json());
  }

  setDefaultHeader(options?: RequestOptionsArgs) {
    this.http_options.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });
  }

  setOptions(options?: RequestOptionsArgs) {
    this.http_options = options;
  }

  setToken() {
    this.http_options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }
}
