import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ÜyeolPage } from '../üyeol/üyeol';
import { HomePage } from '../home/home';
import { KısıselBılgılerPage } from '../kısısel-bılgıler/kısısel-bılgıler';

@NgModule({
  declarations: [
    ÜyeolPage,
    HomePage,
    KısıselBılgılerPage
  ],
  imports: [
    IonicPageModule.forChild(ÜyeolPage),
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(KısıselBılgılerPage),
  ],
})
export class ÜyeolPageModule {}
