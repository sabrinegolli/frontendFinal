import { Component } from '@angular/core';

@Component({
  selector: 'app-validatesales',
  templateUrl: './validatesales.component.html',
  styleUrls: ['./validatesales.component.scss']
})
export class ValidatesalesComponent {
  showTable: boolean = false;
  showConfirmation: boolean = false;

  search() {
    // Perform search logic here if needed

    // Show the table and hide the confirmation modal
    this.showTable = true;
    this.showConfirmation = false;
  }

  openConfirmation() {
    // Show confirmation modal and hide the table
    this.showConfirmation = true;
    this.showTable = false;
  }

  closeConfirmed() {
    // Handle close confirmation logic here
    console.log('Close confirmed');
    this.showConfirmation = false;
  }

  cancelClose() {
    // Handle cancel close logic here
    console.log('Close canceled');
    this.showConfirmation = false;
  }
}
