import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EgitimBılgileriPage } from '../egitim-bılgileri/egitim-bılgileri';

/**
 * Generated class for the Onay2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onay2',
  templateUrl: 'onay2.html',
})
export class Onay2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goCik(){
    this.navCtrl.push(HomePage);
   }
   goEb(){
    this.navCtrl.push(EgitimBılgileriPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Onay2Page');
  }
 
}
