import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-salescontract',
  templateUrl: './salescontract.component.html',
  styleUrls: ['./salescontract.component.scss']
})
export class SalescontractComponent {

items:any[] = [
  { label: 'Make a new sale', route: '/salescontract' }, 
  { label: 'Move pack here', route: '/incidentfile' }, 
  { label: 'Trash pack', route: '/accueil' } ,
  { label: 'Tool history', route: '/accueil' },
  { label: 'Add a new incident', route: '/incidentfile' } ,
];
cancelContract() {
throw new Error('Method not implemented.');
}
validateContract() {
throw new Error('Method not implemented.');
}
  isEditable: any;
  formData: any;
  errorMessage: any;
  successMessage: any;
contract: any;

  addUser() {
    throw new Error('Method not implemented.');
  }

  cancelCreation() {
    throw new Error('Method not implemented.');
  }
}