import { Component } from '@angular/core';

@Component({
  selector: 'app-newcommpack',
  templateUrl: './newcommpack.component.html',
  styleUrls: ['./newcommpack.component.scss']
})
export class NewcommpackComponent {
  materials: any[] = [
    {
      productName: 'md cars master 12/privilege 12/356',
      serialNumber: 'SN1001',
      doublon: 'No',
      dateCode: '2023-01-15',
      associatedLicences: ''
    },
    {
      productName: 'battery master 12',
      serialNumber: 'SN1002',
      doublon: 'Yes',
      dateCode: '2023-02-20',
      associatedLicences: ''
    },
    {
      productName: 'md cars master 12/privilege 12/357',
      serialNumber: 'SN1003',
      doublon: 'No',
      dateCode: '2023-03-10',
      associatedLicences: ''
    }
  ];

  licences: any[] = [
    {
      productName: 'md cars master 12/privilege 12/356',
      invoiceId: 'INV101',
      subscriptionDuration: '1 year',
      endDate: '2024-01-15',
      majorVersion: '1.1'
    },
    {
      productName: '',
      invoiceId: 'INV102',
      subscriptionDuration: '6 months',
      endDate: '2023-08-20',
      majorVersion: '1.2'
    },
    {
      productName: '',
      invoiceId: 'INV103',
      subscriptionDuration: '2 years',
      endDate: '2025-03-10',
      majorVersion: '2.0'
    }
  ];

  showCancelConfirmation: boolean = false;
  showSaveConfirmation: boolean = false;

  onSaveClick(): void {
    this.showSaveConfirmation = true;
  }

  onCloseClick(): void {
    this.showCancelConfirmation = true;
  }

  closeCancelConfirmed(): void {
    this.showCancelConfirmation = false;
    // Add logic to handle the cancellation
  }

  cancelCancelClose(): void {
    this.showCancelConfirmation = false;
  }

  closeSaveConfirmed(): void {
    this.showSaveConfirmation = false;
    // Add logic to handle the save action
  }

  cancelSaveClose(): void {
    this.showSaveConfirmation = false;
  }
}
