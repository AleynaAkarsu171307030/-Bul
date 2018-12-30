import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';


import { OnayPage } from '../onay/onay';

@NgModule({
  declarations: [
    LoginPage,
    HomePage,
   OnayPage
  
    
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicPageModule.forChild(OnayPage),
  
  ],
 
})
export class LoginPageModule {}
