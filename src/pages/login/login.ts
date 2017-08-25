import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	responseData: any;
	  userData = {
	    password: "",
	    email: ""
	  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /*doLogin(credentials){
  	console.log(credentials);
  		this.loginProvider.Login(credentials);
  }*/

  login () {
    //api connection
    this.loginProvider.login(this.userData)
      .then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        console.log(this.responseData.auth_token);
        
        localStorage.setItem('auth_token', this.responseData.auth_token);
        console.log('localStorage');
        console.log(localStorage.getItem("auth_token"));
        //rootPage: any = WelcomePage; //HomePage;
        this.navCtrl.setRoot(HomePage);//push
      }, (err) => {
        console.log(err);
      })
  }
}
