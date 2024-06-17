import { Component } from '@angular/core';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.scss']
})
export class SearchcustomerComponent {
  showTable: boolean = false;
  showConfirmation: boolean = false;

  searchOption: string = '';
  zipCode: string = '';
  customerID: string = '';
  phoneNumber: string = '';
  companyName: string = '';
  agentCustomerID: string = '';

  customers: any[] = []; // This should be replaced with actual data type and fetched data

  search() {
    // Perform your search logic here
    // This is a placeholder. Replace with actual search logic
    this.customers = [
      { actiaCustomerID: 'MFRA18850', companyName: 'Company 1', address: 'Address 1', contactName: 'Contact 1', phoneNumber: '1234567890', faxNumber: '0987654321' },
      { actiaCustomerID: 'AD COSAC', companyName: 'Company 2', address: 'Address 2', contactName: 'Contact 2', phoneNumber: '2345678901', faxNumber: '9876543210' }
    ];

    // Show the table
    this.showTable = true;
    this.showConfirmation = false;
  }

  openConfirmation() {
    this.showConfirmation = true;
    this.showTable = false;
  }

  closeConfirmed() {
    // Logic to handle the confirmed close action
    console.log('Close confirmed');
    this.showTable = false;
    this.showConfirmation = false;
  }

  cancelClose() {
    // Logic to handle the cancel close action
    console.log('Close canceled');
    this.showConfirmation = false;
  }
}
