import { Component } from '@angular/core';

@Component({
  selector: 'app-search-doubles',
  templateUrl: './search-doubles.component.html',
  styleUrls: ['./search-doubles.component.scss']
})
export class SearchDoublesComponent {
  showTable: boolean = false;
  showConfirmation: boolean = false;

  search() {
    this.showTable = true; // Show the table
  }

  openConfirmation() {
    this.showConfirmation = true; // Show the confirmation modal
  }

  closeConfirmed() {
    this.showTable = false; // Hide the table
    this.showConfirmation = false; // Hide the confirmation modal
  }

  cancelClose() {
    this.showConfirmation = false; // Hide the confirmation modal
  }
}
