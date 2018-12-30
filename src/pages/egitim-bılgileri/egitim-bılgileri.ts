import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Onay3Page } from '../onay3/onay3';

/**
 * Generated class for the EgitimBılgileriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-egitim-bılgileri',
  templateUrl: 'egitim-bılgileri.html',
})
export class EgitimBılgileriPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goCik(){
    this.navCtrl.push(HomePage)
  }
   goOnay3(){
     this.navCtrl.push(Onay3Page);
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EgitimBılgileriPage');
  }

}
