import { Injectable } from '@angular/core';
import {Http ,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

let apiUrl = "http://localhost:3000/v1/";
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  getApiUrl : string = "http://localhost:3000/v1/request_for_informations";

  signup(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl + "register", JSON.stringify(data), { headers }).subscribe(res => {
        console.log(res);
        resolve(res.json());
      }), (err) => {
        reject(err);
      }
    });
  }

  login(data){
    //console.log(data);
    return new Promise((resolve, reject) => {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          this.http.post(apiUrl + "authenticate", JSON.stringify(data), { headers }).subscribe(res => {
            // console.log(res.json().data.user_id);
            /*try {
              window["plugins"].OneSignal.sendTag("userID", res.json().data.user_id);
            } catch (e) {
              console.log(e)
            }*/

        resolve(res.json());
      }), (err) => {
        reject(err);
      }
    });
  }

  /*Login(credentials){

	  return this.http.post(this.getApiUrl, credentials)
	                  .map(this.extractData)
	                  .subscribe(data => localStorage.setItem('id_token', data.auth_token));
	                  //.catch(this.handleError);
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
	}*/
}
