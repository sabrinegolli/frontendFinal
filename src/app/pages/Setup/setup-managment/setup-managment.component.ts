import { Component, ViewChild,EventEmitter } from '@angular/core';
import { SetupDisplayData } from '../../../models/SetupDisplayData';
import { SetupService } from '../../../services/setup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SetupFormComponent } from '../setup-form/setup-form.component';
import { SetupListComponent } from '../setup-list/setup-list.component';
import { MatDialog } from '@angular/material/dialog';
import { ModelComponent } from '../../../components/model/model.component';

@Component({
  selector: 'app-setup-managment',
  templateUrl: './setup-managment.component.html',
  styleUrl: './setup-managment.component.scss'
})
export class SetupManagmentComponent {
  showsetupForm: boolean = false;
 selectedSetup: SetupDisplayData | null = null;
 confirmationDialogOpen: boolean = false;
 isEditing: boolean = false;
  @ViewChild(SetupFormComponent) setupFormComponent!: SetupFormComponent;
  @ViewChild(SetupListComponent) setupListComponent!: SetupListComponent;
 setupActionEvent: EventEmitter<void> = new EventEmitter<void>();
  constructor(private setupService: SetupService,private dialog: MatDialog , private snackBar: MatSnackBar) {}
  
  showSetupForm() {
    this.showsetupForm = true;
  }
  
  addSetup(): void {
    this.selectedSetup = null;
    this.showsetupForm = true;
    this.updateSetupList();
  }

  cancelCreation(): void {
    this.showsetupForm = false;
    this.setupFormComponent.cancelForm(); 
    this.setupListComponent.cancelSelection();
    this.isEditing = false; 


  }
  onSetupSelected(setup: SetupDisplayData): void {
    this.selectedSetup = setup;
    this.showsetupForm = true;
    if (this.setupFormComponent) {
      this.setupFormComponent.setup=setup;
    }
  }
 
  editSetup(): void {
    if (this.selectedSetup && this.selectedSetup.id) {
      this.isEditing = true;
      this.setupFormComponent.editSetup();
    }
    else{console.error("Impossible d'éditer l'setup: aucune ID définie.")}
  }
  

  saveSetup(setup: SetupDisplayData): void {
    let title = '';
    let message = '';
    if (this.setupFormComponent.isEditing) {  // Check if setup has an ID, indicating it's an update operation
      title = 'Modifier le setup';
      message = 'Voulez-vous vraiment modifier ce setup?';
    } else {
      title = 'Ajouter un nouveau setup';
      message = 'Voulez-vous vraiment ajouter ce nouveau setup?';
    }
    const dialogRef = this.dialog.open(ModelComponent, {
      data: { title: title, message: message }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.setupFormComponent.isEditing) {  // Proceed with update if ID is present
          this.setupService.updateSetup(setup).subscribe(
            (response) => {
              this.snackBar.open('SETUP modifié avec succès', 'Fermer', { duration: 3000 });
              this.showsetupForm = false;
              this.updateSetupList();
            },
           (error) => {
              console.error('Erreur lors de la modification du setup : ', error);
              this.snackBar.open('Erreur lors de la modification du setup', 'Close', { duration: 3000 });
            }
          );
        } else {  // Proceed with creation if no ID is present
          this.setupService.addSetup(setup).subscribe(
            (response) => {
              this.snackBar.open('Setup enregistré avec succès', 'Close', { duration: 3000 });
         this.showsetupForm=false;
         this.updateSetupList();
              // Optionally refresh the list or perform other actions
            },
            (error) => {
              console.error('Erreur lors de lenregistrement du setup : ', error);
              this.snackBar.open('Erreur lors de lenregistrement du setup', 'Close', { duration: 3000 });
            }
          );
        }
      }
    });}



  updateSetupList(): void {
    this.setupActionEvent.emit();
    this.setupListComponent.fetchSetups(); 
  }
 
  
  deleteSetupConfirmation(setupId: number | undefined): void {
    if (setupId) {
      const dialogRef = this.dialog.open(ModelComponent, {
        data: { title: 'Confirmation', message: 'Voulez-vous vraiment supprimer ce setup?' }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.setupService.deleteSetup(setupId).subscribe({
            next: () => {
              this.snackBar.open('Setup supprimé avec succès', 'Fermer', { duration: 6000 });
              this.showsetupForm = false;
              this.setupListComponent.cancelSelection;
              this.updateSetupList();
            },
            error: (error) => {
              console.error('Erreur lors de la suppression du setup : ', error);
              this.snackBar.open('Erreur lors de la suppression du setup', 'Fermer', { duration: 6000 });
              this.showsetupForm = false;
            }
          });
        }
      });
    } else {
      console.error('Impossible de supprimer le setup : aucune ID définie.');
    }
  }


   
  
}