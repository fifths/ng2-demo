import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Jsonp, Response, RequestOptionsArgs} from '@angular/http';

@Injectable()
export class HttpService {

  private http_options;

  constructor(private http: Http, private jsonp: Jsonp) {
    this.http_options = new RequestOptions({});
  }

  // get
  httpGet(url: string, options?: RequestOptionsArgs) {
    return this.http.get(url, this.http_options).map(response => response.json());
  }

  // post
  httpPost(url: string, body: any, options?: RequestOptionsArgs) {
    return this.http.post(url, body, this.http_options).map(response => response.json());
  }

  // put
  httpPut(url: string, body: any, options?: RequestOptionsArgs) {
    return this.http.put(url, body, this.http_options).map(response => response.json());
  }

  // patch
  httpPatch(url: string, body: any, options?: RequestOptionsArgs) {
    return this.http.patch(url, body, this.http_options).map(response => response.json());
  }

  // delete
  httpDelete(url: string, options?: RequestOptionsArgs) {
    return this.http.delete(url, this.http_options).map(response => response.json());
  }

  // jsonp
  jsonpGet(url: string, options?: RequestOptionsArgs) {
    return this.jsonp.get(url, this.http_options).map(response => response.json());
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
    this.setDefaultHeader();
    const token = '';
    this.http_options.headers.append('Authorization', 'Bearer ' + token);
  }
}
