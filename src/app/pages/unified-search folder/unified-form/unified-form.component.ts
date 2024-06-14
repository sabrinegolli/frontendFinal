import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-unified-form',
  templateUrl: './unified-form.component.html',
  styleUrl: './unified-form.component.scss'
})
export class UnifiedFormComponent {
  handleClick(event: MouseEvent) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.style.borderLeft = '5px solid green';
  
  }
errorMessage: any;
successMessage: any;

  CustomerSelected(CustomerSelected: any, arg1: string) {
    throw new Error('Method not implemented.');
  }
  disableEdit() {
    throw new Error('Method not implemented.');
  }
  @ViewChild('transportDialogTemplate')
  transportDialogTemplate!: TemplateRef<any>;
  @Input() isAddingCustomer: boolean = false;
  @Input() isEditingCustomer: boolean = false;
  @Input() selectedCustomer!: any;
  formData: any = {}; // Stockage des données du formulaire

  @Input() isEditable: boolean = false; 
  showTable: boolean = false; 

  isFieldFocused: boolean = false;

  constructor(private dialog: MatDialog) {
    console.log('showForm initially:', this.showForm);
  }


  showForm: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCustomer'] && this.selectedCustomer) {
      this.formData = { ...this.selectedCustomer };
    } else {
      this.formData = {};
    }
  }

  editCustomer() {
    console.log('Customer à modifier :', this.selectedCustomer);
    this.isEditingCustomer = true;
    this.showForm = true
  }
  openTransportDialog(): void {
    const dialogRef = this.dialog.open(this.transportDialogTemplate);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Transport sélectionné :', result);
    });
  }


  enableEdit() {
    this.isEditable = true;
  }
  
  saveChanges() {
    console.log('Modifications sauvegardées :', this.formData);
    this.isEditable = false;
  }


  searchTool() {
    
    this.showTable = true;
  }

  onFocus() {
    this.isFieldFocused = true;
  }
  onBlur() {
    this.isFieldFocused = false;
  }

  hasData(fieldModel: any): boolean {
    return fieldModel && fieldModel !== '';
  }

}

