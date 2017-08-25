import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RfiProvider } from '../../providers/rfi/rfi';
/**
 * Generated class for the RfiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rfi',
  templateUrl: 'rfi.html',
})
export class RfiPage {
  postList=[];
  errorMessage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private rfiProvider: RfiProvider) {
  	//this.getPosts()
  }
  ionViewDidLoad() {
  	this.getPosts()
    console.log('ionViewDidLoad RfiPage');
  }

    getPosts(){
        this.rfiProvider.getCountries().subscribe((data)=>{
            //this.postList = data;
            this.postList = data;
        });
    }
}
