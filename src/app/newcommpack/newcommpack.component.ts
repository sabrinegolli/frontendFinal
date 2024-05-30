import { Component } from '@angular/core';

@Component({
  selector: 'app-newcommpack',
  templateUrl: './newcommpack.component.html',
  styleUrl: './newcommpack.component.scss'
})
export class NewcommpackComponent {
  materials: any[] = [
    {
      productName: '',
      serialNumber: '',
      doublon: '',
      dateCode: '',
      associatedLicences: ''
    }
  ];


}
