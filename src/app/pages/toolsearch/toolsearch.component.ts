import { Component } from '@angular/core';

@Component({
  selector: 'app-toolsearch',
  templateUrl: './toolsearch.component.html',
  styleUrls: ['./toolsearch.component.scss']
})
export class ToolsearchComponent {
  showTable: boolean = false;
  showConfirmation: boolean = false;

  search() {
    // Perform your search logic here if needed

    // Show the table
    this.showTable = true;
  }

  confirmClose() {
    // Show confirmation modal
    this.showConfirmation = true;
  }

  closeConfirmed() {
    // Close the confirmation modal
    this.showConfirmation = false;

    // Additional logic to handle close operation
    // For example, reset form fields or perform other actions
  }

  cancelClose() {
    // Close the confirmation modal
    this.showConfirmation = false;
  }
}
