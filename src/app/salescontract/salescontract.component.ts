import { Component } from '@angular/core';

@Component({
  selector: 'app-salescontract',
  templateUrl: './salescontract.component.html',
  styleUrls: ['./salescontract.component.scss']
})
export class SalescontractComponent {
  isEditable: any;
  formData: any;
  items: any[] = [
    { label: 'New pack', route: '/salescontract' }, // Current route (for highlighting)
    { label: 'Add element', route: 'acceuil' },
    { label: 'Upgrade pack', route: 'accueil' },
    { label: 'Renew licence', route: 'accueil' },
    { label: 'Make a gift ', route: 'accueil' },
  ];

  addUser() {
    throw new Error('Method not implemented.');
  }

  cancelCreation() {
    throw new Error('Method not implemented.');
  }
}