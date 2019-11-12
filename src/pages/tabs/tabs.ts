import { Component } from '@angular/core';

import { DevPage } from '../dev/dev';
import { FelixPage } from '../felix/felix';
import { NozomiPage } from '../nozomi/nozomi';
import { RemPage } from '../rem/rem';
import { BarCodePage } from '../bar-code/bar-code';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RemPage;
  tab2Root = FelixPage;
  tab3Root = NozomiPage;
  tab4Root = DevPage;
  tab5Root = BarCodePage;

  constructor() {

  }
}

