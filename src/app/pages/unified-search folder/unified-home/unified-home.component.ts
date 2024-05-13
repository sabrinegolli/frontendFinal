import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-unified-home',
  templateUrl: './unified-home.component.html',
  styleUrl: './unified-home.component.scss'
})
export class UnifiedHomeComponent {
  selectedRowIndex: number = -1; 

  showForm: boolean = false;
  selectedCustomer: any;
  isAddingCustomer: boolean = false;
  isEditingCustomer: boolean = false;
  isEditable: boolean = false;
  customerService: any;

  constructor(private dialog: MatDialog , private _formBuilder: FormBuilder ) {}

  onCustomerSelected(Customer: any) {
    this.selectedCustomer = Customer;
    this.isEditingCustomer = true;
    this.isEditable = false; 
    this.showForm = true; 
  }
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  toggleForm() {
    this.showForm = !this.showForm;
    this.isAddingCustomer = true;
    this.isEditable = true;
  }
  editCustomer() {
    console.log('Customer à modifier :', this.selectedCustomer);
    this.isEditingCustomer = true;
    this.showForm = true;
     this.isEditable = true; // Si l'édition est souhaitée dès la modification, décommentez cette ligne
  }
  cancelForm() {
    this.showForm = false; 
    this.isAddingCustomer = false;
    this.isEditingCustomer = false;
    this.selectedCustomer = null; 
    this.isEditable = false; 
    this.options.reset();

    this.selectedRowIndex = -1;// Assurez-vous de réinitialiser l'état d'édition

  }

  saveChanges() {
    if (this.isAddingCustomer) { 
      this.customerService.addCustomer(this.selectedCustomer).subscribe(() => {
        console.log('Customer added');
        this.cancelForm();
      });
    } else {
      this.customerService.updateCustomer(this.selectedCustomer).subscribe(() => {
        console.log('Customer updated');
        this.cancelForm();
      });
    }
  }
  deleteCustomer() {
    if (this.isEditingCustomer && confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(this.selectedCustomer.id).subscribe(() => {
        // Handle success
        console.log('Customer deleted');
        this.cancelForm();
      });
    }
  }
}