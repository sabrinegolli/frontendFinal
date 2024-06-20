import { Component } from '@angular/core';

@Component({
  selector: 'app-search-doubles',
  templateUrl: './search-doubles.component.html',
  styleUrls: ['./search-doubles.component.scss']
})
export class SearchDoublesComponent {
  showCancelConfirmation: boolean = false;
  showTable: boolean = false; // Flag to control table visibility

  // Method to show the confirmation modal
  showConfirmationModal() {
    this.showCancelConfirmation = true;
  }

  // Method to close the confirmation modal and confirm cancel
  closeCancelConfirmed() {
    // Handle your confirmation logic here (e.g., cancel operation)
    this.showCancelConfirmation = false;
  }

  // Method to close the confirmation modal without cancelling
  cancelCancelClose() {
    // Handle closing without cancellation if needed
    this.showCancelConfirmation = false;
  }

  // Method to show the table when search button is clicked
  showTableOnClick() {
    this.showTable = true;
  }
}
