import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Onay2Page } from '../onay2/onay2';
import { HomePage } from '../home/home';
import { EgitimBılgileriPage } from '../egitim-bılgileri/egitim-bılgileri';

@NgModule({
  declarations: [
    Onay2Page,
    HomePage,
    EgitimBılgileriPage
  ],
  imports: [
    IonicPageModule.forChild(Onay2Page),
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(EgitimBılgileriPage),
  ],
})
export class Onay2PageModule {}
