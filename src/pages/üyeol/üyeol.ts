import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KısıselBılgılerPage } from '../kısısel-bılgıler/kısısel-bılgıler';
import { HomePage } from '../home/home';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
/**
 * Generated class for the ÜyeolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-üyeol',
  templateUrl: 'üyeol.html',
})
export class ÜyeolPage {
  user: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ÜyeolPage');
  }
  goKb(){
    this.navCtrl.push(KısıselBılgılerPage);
  }
goCik(){
  this.navCtrl.push(HomePage);
}
loginfb(){
  this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) =>  {
    if(res.status==='connected'){
    this.user.img='https://graph.facebook.com/'+ res.authResponse.userID+'/picture?type=square'}
    else{
      alert('Login failed');
    }
    console.log('Logged into Facebook!', res)})

  .catch(e => console.log('Error logging into Facebook', e));
  }

}