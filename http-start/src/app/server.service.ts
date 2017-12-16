import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http-1693a.firebaseio.com/data.json',
    //     servers,
    //     {headers: headers});
    return this.http.put('https://udemy-ng-http-1693a.firebaseio.com/data.json',
        servers,
        {headers: headers});
  }
  getServers() {
    return this.http.get('https://udemy-ng-http-1693a.firebaseio.com/data.json').map(
        (response: Response) => {
          return response.json();
        }
    ).catch(
        () => {
          return Observable.throw('Something went wrong');
        }
    );
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-1693a.firebaseio.com/AppName.json').map(
        (response: Response) => {
          return response.json();
        }
    );
  }
}
