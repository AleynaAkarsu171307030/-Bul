import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnayPage } from '../onay/onay';
import { KısıselBılgılerPage } from '../kısısel-bılgıler/kısısel-bılgıler';
import { HomePage } from '../home/home';
import { IlanlarPage } from '../ılanlar/ılanlar';

@NgModule({
  declarations: [
    OnayPage,
    KısıselBılgılerPage,
    HomePage,
    IlanlarPage
  ],
  imports: [
    IonicPageModule.forChild(OnayPage),
    IonicPageModule.forChild(KısıselBılgılerPage),
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(IlanlarPage),

  ],
})
export class OnayPageModule {}
