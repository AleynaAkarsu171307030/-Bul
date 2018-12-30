import { Component } from '@angular/core';

import{LoginPage} from'../login/login';
import {  NavController, NavParams } from 'ionic-angular';



import { ModalController} from 'ionic-angular';
import { ÜyeolPage } from '../üyeol/üyeol';
import { IlanlarPage } from '../ılanlar/ılanlar';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})
  export class HomePage {
   
    items;

    constructor(public navCtrl: NavController,public modalCtrl: ModalController,params:NavParams) {
      }
     
    
        // if the value is an empty string don't filter the items
    
      
      goUye(){
        this.navCtrl.push(LoginPage);
      }
      goUye2(){
        this.navCtrl.push(ÜyeolPage);
      }
      goIlan(){
        this.navCtrl.push(IlanlarPage);
      }
      presentProfileModal() {
        let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
        profileModal.present();
      }
     
     }
     class Profile {

      constructor(params: NavParams) {
        console.log('UserId', params.get('userId'));
      }
    
    }
     
    