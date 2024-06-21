import { Component } from '@angular/core';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent {
  showCancelConfirmation = false;
  showSaveConfirmation = false;

  onSaveClick() {
    this.showSaveConfirmation = true;
  }

  onCloseClick() {
    this.showCancelConfirmation = true;
  }

  closeCancelConfirmed() {
    this.showCancelConfirmation = false;
    // Logic to handle cancel confirmation
  }

  cancelCancelClose() {
    this.showCancelConfirmation = false;
  }

  closeSaveConfirmed() {
    this.showSaveConfirmation = false;
    // Logic to handle save confirmation
  }

  cancelSaveClose() {
    this.showSaveConfirmation = false;
  }
}
