import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Click: number;
  constructor(public navCtrl: NavController) {
    this.Click = 0;
  }
  ClickCount(){
    this.Click++;
   }
}


