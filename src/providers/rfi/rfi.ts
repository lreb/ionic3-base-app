import { Injectable } from '@angular/core';
import {Http ,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import { GlobalServiceProvider } from '../global-service/global-service';
import * as GlobalServiceProvider from '../global-service/global-service'; //<==== this one
/*
  Generated class for the RfiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class RfiProvider {

  constructor(public http: Http) {
    console.log('Hello RfiProvider Provider');
  }
  //getApiUrl : string = "https://jsonplaceholder.typicode.com/posts";
  //getApiUrl: string =  GlobalServiceProvider.globalHost + 'request_for_informations';//"http://localhost:3000/v1/request_for_informations";
  /*getPosts() {
    return  this.http.get(this.getApiUrl);
            //.do((res : Response ) => console.log(res.json())
            //.map((res : Response ) => res.json())
            //.catch(error => console.log(error));
	}*/

	createAuthorizationHeader(headers: Headers) {
	    headers.append('Authorization', 'Bearer ' + localStorage.getItem("auth_token")); 
	    headers.append('Content-Type', 'application/json');
	  }

	getCountries(): Observable<string[]> {
	  let headers = new Headers();
      this.createAuthorizationHeader(headers);
      console.log(headers);
	  return this.http.get(GlobalServiceProvider.appHost + 'request_for_informations', {headers:headers})
	                  .map(this.extractData)
	                  .catch(this.handleError);
	}

	private extractData(res: Response) {
	  let body = res.json();
	  return body || { };
	}

	private handleError (error: Response | any) {
	  let errMsg: string;
	  if (error instanceof Response) {
	    const body = error.json() || '';
	    const err = body.error || JSON.stringify(body);
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
	    errMsg = error.message ? error.message : error.toString();
	  }
	  console.error(errMsg);
	  return Observable.throw(errMsg);
	}
}
