import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private rfiProvider: RfiProvider, private alertCtrl:AlertController) {
  	//this.getPosts()
  }
  ionViewDidLoad() {
  	this.getPosts()
    console.log('ionViewDidLoad RfiPage');
  }

  getPosts(){
      this.rfiProvider.getCountries().subscribe((data)=>{
          //this.postList = data;
          console.log(data);
          this.postList = data;
      });
  }

  addRfi(){
    let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Enter a name for this new song you're so keen on adding",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
    ]/*,
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          /*this.posts.push({
            title: data.title
          });*
        }
      }
    ]*/
  });
    this.postList.push({id: 5, name: "rfi2", description: "hola2", is_important: null, limit_date: null});
  prompt.present();

  }


}
