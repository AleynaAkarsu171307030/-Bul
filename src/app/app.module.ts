import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';

import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Facebook } from '@ionic-native/facebook';

import { KısıselBılgılerPage } from '../pages/kısısel-bılgıler/kısısel-bılgıler';
import { Onay2Page } from '../pages/onay2/onay2';
import { OnayPage } from '../pages/onay/onay';
import { EgitimBılgileriPage } from '../pages/egitim-bılgileri/egitim-bılgileri';
import { ÜyeolPage } from '../pages/üyeol/üyeol';
import { Onay3Page } from '../pages/onay3/onay3';
import { IlanlarPage } from '../pages/ılanlar/ılanlar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    KısıselBılgılerPage,
    Onay2Page,
    OnayPage,
    EgitimBılgileriPage,
    ÜyeolPage,
    Onay3Page,
    IlanlarPage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    KısıselBılgılerPage,
    Onay2Page,
    OnayPage,
    EgitimBılgileriPage,
    ÜyeolPage,
    Onay3Page,
    IlanlarPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    Camera
  ]
})
export class AppModule {}
