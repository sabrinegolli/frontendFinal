import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerfile',
  templateUrl: './customerfile.component.html',
  styleUrls: ['./customerfile.component.scss']
})
export class CustomerfileComponent implements OnInit {
  showCompanyDetails: boolean = true; 
  showCancelConfirmation: boolean = false;
  showSaveConfirmation: boolean = false;
  showMovePackModal: boolean = false;
  showTrashPackModal: boolean = false;
  showPackFusionModal: boolean = false;
  packName1 = '';
  packName2 = '';
  packName = ''; 

  openCancelConfirmation() {
    this.showCancelConfirmation = true;
    this.showSaveConfirmation = false;
  }

  openSaveConfirmation() {
    this.showSaveConfirmation = true;
    this.showCancelConfirmation = false;
  }

  closeCancelConfirmed() {
    console.log('Cancel confirmed');
    this.showCancelConfirmation = false;
  }

  cancelCancelClose() {
    console.log('Cancel close canceled');
    this.showCancelConfirmation = false;
  }

  closeSaveConfirmed() {
    console.log('Save confirmed');
    this.showSaveConfirmation = false;
  }

  cancelSaveClose() {
    console.log('Save close canceled');
    this.showSaveConfirmation = false;
  }

  openMovePackModal() {
    this.showMovePackModal = true;
  }

  closeMovePackModal() {
    this.showMovePackModal = false;
  }

  confirmMovePack() {
    console.log('Pack to move:', this.packName);
    this.closeMovePackModal();
  }

  openTrashPackModal() {
    this.showTrashPackModal = true;
  }

  closeTrashPackModal() {
    this.showTrashPackModal = false;
  }

  confirmTrashPack() {
    console.log('Trash pack confirmed');
    // Implement logic to trash the pack here
    this.closeTrashPackModal();
  }

  openPackFusionModal() {
    this.showPackFusionModal = true;
  }

  closePackFusionModal() {
    this.showPackFusionModal = false;
  }

  confirmPackFusion() {
    console.log('Pack Fusion confirmed');
    console.log('Pack 1:', this.packName1);
    console.log('Pack 2:', this.packName2);
    // Implement logic to fuse the packs here
    this.closePackFusionModal();
  }

  toggleCompanyDetails(): void {
    this.showCompanyDetails = !this.showCompanyDetails;
  }

  displayedProducts: any[] = [
    { productName: 'Pack 1', serialNumber: '12345', dateCode: '2021-01-01', vciSerialNumber: 'VCI123', underWarranty: true, showRow: true },
    { productName: 'Pack 2', serialNumber: '67890', dateCode: '2022-02-02', vciSerialNumber: 'VCI456', underWarranty: false, showRow: true }
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
