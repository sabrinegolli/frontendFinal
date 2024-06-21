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

  // Object to hold the state of each button
  buttonStates: { [key: string]: boolean } = {};

  constructor() {
    // Initialize button states
    this.buttonStates = {
      'material1': false,
      'material2': false,
      'licence1': false,
      'licence2': false,
      'licence3': false,
      'licence4': false,
    };
  }

  // Method to toggle button state
  toggleButtonState(key: string): void {
    // Toggle the state of the clicked button
    this.buttonStates[key] = !this.buttonStates[key];
    
    // Reset other button states if they are different keys
    for (const buttonKey in this.buttonStates) {
      if (buttonKey !== key) {
        this.buttonStates[buttonKey] = false;
      }
    }
  }

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
