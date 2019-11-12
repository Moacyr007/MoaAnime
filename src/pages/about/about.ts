import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  Click: number;

  constructor(public navCtrl: NavController) {
    this.Click = 0;
  }
  ClickCount(){
    this.Click++;
   }
}
