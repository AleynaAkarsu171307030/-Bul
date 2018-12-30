import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KısıselBılgılerPage } from '../kısısel-bılgıler/kısısel-bılgıler';
import { HomePage } from '../home/home';
import { Onay2Page } from '../onay2/onay2';
import { LoginPage } from '../login/login';

@NgModule({
  declarations: [
    KısıselBılgılerPage,
    HomePage,
    Onay2Page,
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(KısıselBılgılerPage),
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(LoginPage),

  ],
})
export class KısıselBılgılerPageModule {}
