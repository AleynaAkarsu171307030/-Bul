import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { OnayPage } from '../onay/onay';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: Facebook) {
  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad LoginPage');
    
  
  }
 
  goGit(){
    this.navCtrl.push(OnayPage);
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
