import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-customerfile',
  templateUrl: './customerfile.component.html',
  styleUrls: ['./customerfile.component.scss']
})
export class CustomerfileComponent implements OnInit {
cancelForm() {
throw new Error('Method not implemented.');
}
  displayedProducts: any[] = [
    { productName: 'Product 1', serialNumber: '12345', dateCode: '2021-01-01', vciSerialNumber: 'VCI123', underWarranty: true, showRow: true },
    { productName: 'Product 2', serialNumber: '67890', dateCode: '2022-02-02', vciSerialNumber: 'VCI456', underWarranty: false, showRow: true }
  ];
  displayedMaterials: any[] = [
    { materialComponent: 'Component 1', productName: 'Product A', serialNumber: '11111', dateCode: '2021-06-01', warrantyEndDate: '2023-06-01', showRow: true },
    { materialComponent: 'Component 2', productName: 'Product B', serialNumber: '22222', dateCode: '2022-07-02', warrantyEndDate: '2024-07-02', showRow: true }
  ];
  displayedLicences: any[] = [
    { licence: 'Licence 1', productName: 'Product C', invoiceID: 'INV001', activatedManual: 'Yes', subscriptionEndDate: '2022-12-31', majorVersion: 'v1.0', showRow: true },
    { licence: 'Licence 2', productName: 'Product D', invoiceID: 'INV002', activatedManual: 'No', subscriptionEndDate: '2023-11-30', majorVersion: 'v2.0', showRow: true }
  ];
  productsVisible: boolean = true;
  materialsVisible: boolean = true;
  licencesVisible: boolean = true;
  constructor() { }
  ngOnInit(): void {
  }
  toggleRow(type: string): void {
    if (type === 'products') {
      this.productsVisible = !this.productsVisible;
      this.displayedProducts.forEach(product => product.showRow = this.productsVisible);
    } else if (type === 'materials') {
      this.materialsVisible = !this.materialsVisible;
      this.displayedMaterials.forEach(material => material.showRow = this.materialsVisible);
    } else if (type === 'licences') {
      this.licencesVisible = !this.licencesVisible;
      this.displayedLicences.forEach(licence => licence.showRow = this.licencesVisible);
    }
  }
}