import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FelixPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-felix',
  templateUrl: 'felix.html',
})
export class FelixPage {
  Click: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Click = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FelixPage');
  }
  ClickCount(){
    this.Click++;
   }
}
