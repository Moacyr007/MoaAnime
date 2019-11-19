import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { BarcodeScanner} from '@ionic-native/barcode-scanner'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the DevPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dev',
  templateUrl: 'dev.html',
})
export class DevPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevPage');
  }

  startScan(){    
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
        console.log('Error', err);
    });
  }

}
