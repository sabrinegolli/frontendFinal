import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-salescontract',
  templateUrl: './salescontract.component.html',
  styleUrls: ['./salescontract.component.scss']
})
export class SalescontractComponent {

items:any[] = [
  {label: 'New pack', route: '/newcommpack' }, 
  { label: 'Add element', route: '/addelement' }, 
  { label: 'Upgrade pack', route: '/upgrading' } ,
  { label: 'Renew licence ', route: '/licence' },
  ,
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
handleClick(event: MouseEvent) {
  const inputElement = event.target as HTMLInputElement;
  inputElement.style.borderLeft = '5px solid green';}
  addUser() {
    throw new Error('Method not implemented.');
  }

  cancelCreation() {
    throw new Error('Method not implemented.');
  }
}