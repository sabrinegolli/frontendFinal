import { Component } from '@angular/core';

@Component({
  selector: 'app-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.scss']
})
export class LicenceComponent {
  showSaveConfirmation: boolean = false;
  showCancelConfirmation: boolean = false;

  constructor() { }

  onSaveClick(): void {
    this.showSaveConfirmation = true;
  }

  onCancelClick(): void {
    this.showCancelConfirmation = true;
  }

  closeSaveConfirmed(): void {
    // Logic when "Yes" is clicked on save confirmation
    this.showSaveConfirmation = false;
    console.log('Save confirmed');
  }

  cancelSaveClose(): void {
    // Logic when "No" is clicked on save confirmation
    this.showSaveConfirmation = false;
    console.log('Save canceled');
  }

  closeCancelConfirmed(): void {
    // Logic when "Yes" is clicked on cancel confirmation
    this.showCancelConfirmation = false;
    console.log('Cancel confirmed');
  }

  cancelCancelClose(): void {
    // Logic when "No" is clicked on cancel confirmation
    this.showCancelConfirmation = false;
    console.log('Cancel canceled');
  }

  handleClick(event: MouseEvent): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.style.borderLeft = '5px solid green';
  }
}
