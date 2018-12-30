import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KısıselBılgılerPage } from '../kısısel-bılgıler/kısısel-bılgıler';
import { HomePage } from '../home/home';
import { IlanlarPage } from '../ılanlar/ılanlar';

/**
 * Generated class for the OnayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onay',
  templateUrl: 'onay.html',
})
export class OnayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnayPage');
  }
  goEvet(){
    this.navCtrl.push(KısıselBılgılerPage);
  
  }
  goCik(){
    this.navCtrl.push(HomePage);
  }
  goIlanlar(){
    this.navCtrl.push(IlanlarPage);
  }
}
