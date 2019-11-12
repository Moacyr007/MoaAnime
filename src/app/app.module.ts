/*import { NgModule, ErrorHandler } from '@angular/core';*/
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { BarCodePage } from '../pages/bar-code/bar-code';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DevPage,
    RemPage,
    FelixPage,
    NozomiPage,
    BarCodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DevPage,
    RemPage,
    FelixPage,
    NozomiPage,
    BarCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
