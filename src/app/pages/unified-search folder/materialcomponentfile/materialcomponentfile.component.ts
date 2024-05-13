import { Component, Input, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-materialcomponentfile',
  templateUrl: './materialcomponentfile.component.html',
  styleUrl: './materialcomponentfile.component.scss'
})
export class MaterialcomponentfileComponent {

 CustomerSelected(CustomerSelected: any, arg1: string) {
  throw new Error('Method not implemented.');
}
disableEdit() {
  throw new Error('Method not implemented.');
}
@ViewChild('transportDialogTemplate')
transportDialogTemplate!: TemplateRef<any>;
@Input() isAddingTool: boolean = false;
@Input() isEditingTool: boolean = false;
@Input() selectedTool!: any;
formData: any = {}; // Stockage des données du formulaire

@Input() isEditable: boolean = false; 
showTable: boolean = false; 

isFieldFocused: boolean = false;

constructor(private dialog: MatDialog) {
  console.log('showForm initially:', this.showForm);
}


showForm: boolean = false;
ngOnChanges(changes: SimpleChanges): void {
  if (changes['selectedCustomer'] && this.selectedTool) {
    this.formData = { ...this.selectedTool };
  } else {
    this.formData = {};
  }
}

editTool() {
  console.log('Customer à modifier :', this.selectedTool);
  this.isEditingTool = true;
  this.showForm = true
}
openTransportDialog(): void {
  const dialogRef = this.dialog.open(this.transportDialogTemplate);

  dialogRef.afterClosed().subscribe((result: any) => {
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

