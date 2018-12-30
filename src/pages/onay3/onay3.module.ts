import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Onay3Page } from '../onay3/onay3';
import { HomePage } from '../home/home';
import { IlanlarPage } from '../ılanlar/ılanlar';

@NgModule({
  declarations: [
    Onay3Page,
    HomePage,
    IlanlarPage


  ],
  imports: [
    IonicPageModule.forChild(Onay3Page),
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(IlanlarPage),


  ],
})
export class Onay3PageModule {}
