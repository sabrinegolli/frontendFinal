import { Component } from '@angular/core';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddCustomerComponent {
  showCancelConfirmation: boolean = false;
  showSaveConfirmation: boolean = false;

  openCancelConfirmation() {
    this.showCancelConfirmation = true;
    this.showSaveConfirmation = false;
  }

  openSaveConfirmation() {
    this.showSaveConfirmation = true;
    this.showCancelConfirmation = false;
  }

  closeCancelConfirmed() {
    console.log('Cancel confirmed');
    this.showCancelConfirmation = false;
  }

  cancelCancelClose() {
    console.log('Cancel close canceled');
    this.showCancelConfirmation = false;
  }

  closeSaveConfirmed() {
    console.log('Save confirmed');
    this.showSaveConfirmation = false;
  }

  cancelSaveClose() {
    console.log('Save close canceled');
    this.showSaveConfirmation = false;
  }
}
