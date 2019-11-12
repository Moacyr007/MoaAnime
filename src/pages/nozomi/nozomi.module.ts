import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NozomiPage } from './nozomi';

@NgModule({
  declarations: [
    NozomiPage,
  ],
  imports: [
    IonicPageModule.forChild(NozomiPage),
  ],
})
export class NozomiPageModule {}
