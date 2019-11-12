import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { DevPage } from '../pages/dev/dev';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RemPage } from '../pages/rem/rem';
import { FelixPage } from '../pages/felix/felix';
import { NozomiPage } from '../pages/nozomi/nozomi';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DevPage,
    RemPage,
    FelixPage,
    NozomiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DevPage,
    RemPage,
    FelixPage,
    NozomiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
