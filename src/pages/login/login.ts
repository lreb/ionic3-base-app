import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginProvider: LoginProvider, private app:App) {
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
        localStorage.setItem('signed', 'true');
        console.log('localStorage');
        console.log(localStorage.getItem("auth_token"));
        console.log(localStorage.getItem("signed"));
        //rootPage: any = WelcomePage; //HomePage;
        //this.navCtrl.push(HomePage);
        //this.navCtrl.setRoot(HomePage);//push
        //this.navCtrl.setRoot(HomePage);
        this.app.getRootNav().setRoot(HomePage);
      }, (err) => {
        console.log(err);
      })
  }

  
}