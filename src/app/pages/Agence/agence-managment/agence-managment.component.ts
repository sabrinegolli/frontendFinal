import { Component, ViewChild,EventEmitter } from '@angular/core';
import { AgenceFormComponent } from '../agence-form/agence-form.component';
import { AgenceListComponent } from '../agence-list/agence-list.component';
import { Agence } from '../../../models/Agence';
import { AgenceService } from '../../../services/agence.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModelComponent } from '../../../components/model/model.component';

@Component({
  selector: 'app-agence-managment',
  templateUrl: './agence-managment.component.html',
  styleUrl: './agence-managment.component.scss'
})
export class AgenceManagmentComponent  {

  showagenceForm: boolean = false;
  selectedAgence: Agence | null = null;
  confirmationDialogOpen: boolean = false;
  isEditing: boolean = false;

  @ViewChild(AgenceFormComponent) agenceFormComponent!: AgenceFormComponent;
  @ViewChild(AgenceListComponent) agenceListComponent!: AgenceListComponent;
  agenceActionEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private agenceService:AgenceService, private dialog: MatDialog , private snackBar: MatSnackBar ) {}

  showAgenceForm() {
    this.showagenceForm = true;
  }
  addAgence(): void {
    this.selectedAgence = null;
    this.showagenceForm = true;
    this.updateAgenceList();

  }
  cancelCreation():void {
    this.showagenceForm = false;
    this.agenceFormComponent.cancelForm(); 
    this.agenceListComponent.cancelSelection();
    this.isEditing = false; 

  }

  onAgenceSelected(agence: Agence): void {
    this.selectedAgence =  { ...agence };
    this.showagenceForm = true;
  }

  updateAgenceList(): void {
    this.agenceActionEvent.emit();
    this.agenceListComponent.fetchAgences(); 
  }
    
  editAgence() {
    if (this.selectedAgence && this.selectedAgence.id) {
      this.isEditing = true;
      this.agenceFormComponent.editAgence();
    } else{console.error("Impossible d'éditer l'agence: aucune ID définie.")}
  }

  
  // saveAgence(agence: Agence): void {
  //   this.agenceListComponent.fetchAgences();
  //   this.showagenceForm = false;
  // }


  saveAgence(agence: Agence): void {
  let title = '';
  let message = '';

  if (this.isEditing) {
    title = 'Modifier l\'agence';
    message = 'Voulez-vous vraiment modifier cette agence?';
  } else {
    title = 'Ajouter une nouvelle agence';
    message = 'Voulez-vous vraiment ajouter cette nouvelle agence?';
  }

  const dialogRef = this.dialog.open(ModelComponent, {
    data: { title: title, message: message }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      if (this.isEditing) {
        this.agenceService.updateAgence(agence?.id, agence).subscribe(
          (response) => {
            this.snackBar.open('Agence modifiée avec succès', 'Fermer', { duration: 3000 });
            this.showagenceForm = false;
            this.updateAgenceList();
          },
          (error) => {
            console.error('Erreur lors de la modification de l\'agence : ', error);
            this.snackBar.open('Erreur lors de la modification de l\'agence', 'Fermer', { duration: 3000 });
          }
        );
      } else {
        this.agenceService.createAgence(agence).subscribe(
          (response) => {
            this.snackBar.open('Agence enregistrée avec succès', 'Fermer', { duration: 3000 });
            this.showagenceForm = false;
            this.updateAgenceList();
          },
          (error) => {
            this.snackBar.open('Erreur lors de l\'enregistrement de l\'agence:', 'Fermer', { duration: 3000 });
            console.error('Erreur lors de l\'enregistrement de l\'agence : ', error);
          }
        );
      }
    }
  });
}

deleteAgenceConfirmation(agenceId: number | undefined): void {
  if (agenceId) {
    const dialogRef = this.dialog.open(ModelComponent, {
      data: { title: 'Confirmation', message: 'Voulez-vous vraiment supprimer cette agence?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.agenceService.deleteAgence(agenceId).subscribe(
          () => {
            this.snackBar.open('Agence supprimée avec succès', 'Fermer', { duration: 6000 });
            this.showagenceForm = false;
            this.agenceListComponent.cancelSelection();
            this.updateAgenceList();
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'agence : ', error);
            this.snackBar.open('Erreur lors de la suppression de l\'agence', 'Fermer', { duration: 6000 });
            this.showagenceForm = false;
          }
        );
      }
    });
  } else {
    console.error('Impossible de supprimer l\'agence : aucune ID définie.');
  }
}
  

  // cancel(): void {
  //   this.showagenceForm = false;
  //   this.selectedAgence = null;
  // }


}
