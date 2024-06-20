import { Component } from '@angular/core';

@Component({
  selector: 'app-repairstocklist',
  templateUrl: './repairstocklist.component.html',
  styleUrls: ['./repairstocklist.component.scss']
})
export class RepairstocklistComponent {
  showCancelConfirmation: boolean = false;
  showTable: boolean = false; // Flag to control table visibility

  // Method to show the confirmation modal
  showConfirmationModal() {
    this.showCancelConfirmation = true;
  }

  // Method to close the confirmation modal and cancel operation
  closeCancelConfirmed() {
    // Handle your confirmation logic here (e.g., cancel operation)
    this.showCancelConfirmation = false;
  }

  // Method to close the confirmation modal without canceling
  cancelCancelClose() {
    // Handle closing without cancellation if needed
    this.showCancelConfirmation = false;
  }

  // Method to show the table when search button is clicked
  showTableOnClick() {
    this.showTable = true;
  }
}
