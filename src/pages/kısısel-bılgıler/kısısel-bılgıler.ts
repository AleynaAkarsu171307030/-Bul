import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Onay2Page } from '../onay2/onay2';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the KısıselBılgılerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kısısel-bılgıler',
  templateUrl: 'kısısel-bılgıler.html',
})
export class KısıselBılgılerPage {
  image:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KısıselBılgılerPage');
  }
 goCik(){
   this.navCtrl.push(HomePage);
 }
  goOnay2(){
    this.navCtrl.push(Onay2Page)
  }
  pictureFromCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }
    this.takePhoto(options);
  }
       pictureFromGallery(){
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation:true,
          saveToPhotoAlbum:true
        }
      this.takePhoto(options);
      }
    async takePhoto(options:CameraOptions){
   try{
     const result=await this.camera.getPicture(options);
     this.image=  'data:image/jpeg;base64, + {ImageData}'; 

     
   
  }
  catch(e){
    console.error(e);
  }
  }
  }

