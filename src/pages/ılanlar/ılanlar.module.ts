import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IlanlarPage } from '../ılanlar/ılanlar';

@NgModule({
  declarations: [
    IlanlarPage,
  ],
  imports: [
    IonicPageModule.forChild(IlanlarPage),
  ],
})
export class IlanlarPageModule {}
