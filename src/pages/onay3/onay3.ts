import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IlanlarPage } from '../ılanlar/ılanlar';

/**
 * Generated class for the Onay3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onay3',
  templateUrl: 'onay3.html',
})
export class Onay3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goCik3(){
    this.navCtrl.push(HomePage);
  }
   goIlanlar(){
     this.navCtrl.push(IlanlarPage)
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Onay3Page');
  }

}
