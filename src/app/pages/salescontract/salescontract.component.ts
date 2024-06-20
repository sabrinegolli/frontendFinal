import { Component } from '@angular/core';

@Component({
  selector: 'app-salescontract',
  templateUrl: './salescontract.component.html',
  styleUrls: ['./salescontract.component.scss']
})
export class SalescontractComponent {

  items: any[] = [
    { label: 'New pack', route: '/newcommpack' }, 
    { label: 'Add element', route: '/addelement' }, 
    { label: 'Upgrade pack', route: '/upgrading' }, 
    { label: 'Renew licence', route: '/licence' }
  ];

  showCancelConfirmation = false;
  showSaveConfirmation = false;

  validateContract() {
    this.showSaveConfirmation = true;
  }

  cancelCancelClose() {
    this.showCancelConfirmation = false;
  }

  closeCancelConfirmed() {
    // Handle cancel logic here
    this.showCancelConfirmation = false;
  }

  cancelSaveClose() {
    this.showSaveConfirmation = false;
  }

  closeSaveConfirmed() {
    // Handle save logic here
    this.showSaveConfirmation = false;
  }

  handleClick(event: MouseEvent) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.style.borderLeft = '5px solid green';
  }
}
