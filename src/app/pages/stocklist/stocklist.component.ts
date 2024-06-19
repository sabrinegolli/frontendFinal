import { Component } from '@angular/core';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.scss']
})
export class StocklistComponent {
  showTable = false;
  showConfirmation = false;

  search() {
    this.showTable = true;
    this.showConfirmation = false;
  }

  openConfirmation() {
    this.showConfirmation = true;
  }

  closeConfirmed() {
    this.showTable = false;
    this.showConfirmation = false;
  }

  cancelClose() {
    this.showConfirmation = false;
  }
}
