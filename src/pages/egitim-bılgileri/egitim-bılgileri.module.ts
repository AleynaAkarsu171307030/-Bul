import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EgitimBılgileriPage } from '../egitim-bılgileri/egitim-bılgileri';
import { Onay2Page } from '../onay2/onay2';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    EgitimBılgileriPage,
    Onay2Page,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(EgitimBılgileriPage),
    IonicPageModule.forChild(Onay2Page),
    IonicPageModule.forChild(HomePage),

  ],
})
export class EgitimBılgileriPageModule {}
