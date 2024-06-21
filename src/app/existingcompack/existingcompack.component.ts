import { Component } from '@angular/core';

@Component({
  selector: 'app-existingcompack',
  templateUrl: './existingcompack.component.html',
  styleUrls: ['./existingcompack.component.scss']
})
export class ExistingcompackComponent {
  showCancelConfirmation: boolean = false;
  showSaveConfirmation: boolean = false;

  // Method to handle close button click
  onCloseClick() {
    this.showCancelConfirmation = true;
  }

  // Method to handle save button click
  onSaveClick() {
    this.showSaveConfirmation = true;
  }

  // Methods to handle confirmation responses for cancel action
  closeCancelConfirmed() {
    this.showCancelConfirmation = false;
    // Logic to handle confirmed close action
  }

  cancelCancelClose() {
    this.showCancelConfirmation = false;
  }

  // Methods to handle confirmation responses for save action
  closeSaveConfirmed() {
    this.showSaveConfirmation = false;
    // Logic to handle confirmed save action
  }

  cancelSaveClose() {
    this.showSaveConfirmation = false;
  }
}
