import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  Click: number;
  constructor(public navCtrl: NavController) {
    this.Click = 0;
  }
  ClickCount(){
    this.Click++;
   }
}
