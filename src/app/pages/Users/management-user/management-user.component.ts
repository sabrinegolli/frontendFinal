import { Component, EventEmitter, ViewChild } from '@angular/core';
import { UserDto } from '../../../models/UserDto';
import { CreeuserComponent } from '../creeuser/creeuser.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { UserlistComponent } from '../userlist/userlist.component';
import { MatDialog } from '@angular/material/dialog';
import { ModelComponent } from '../../../components/model/model.component';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrl: './management-user.component.scss'
})
export class ManagementUserComponent {
  showCreeuser: boolean = false;
  selectedUser: UserDto | null = null;
  confirmationDialogOpen: boolean = false;

  isEditing: boolean = false;
  @ViewChild(CreeuserComponent) creeUserComponent!: CreeuserComponent;
  @ViewChild(UserlistComponent) userListComponent!: UserlistComponent ;
  userActionEvent: EventEmitter<void> = new EventEmitter<void>();


  constructor(private authService: AuthService ,private snackBar: MatSnackBar , private dialog: MatDialog ,private userService :UserService) {}

  showCreeuserForm() {
    this.showCreeuser = true;
  }
  addUser(): void {
    this.selectedUser = null; 
    this.showCreeuser = true;
    this.updateUserList();
  }
  cancelCreation() {
    this.showCreeuser = false;
    this.creeUserComponent.cancelForm(); 
    this.userListComponent.cancelSelection();
    this.isEditing = false; 

  }
  onUserSelected(user: UserDto): void {
    this.selectedUser = { ...user }; 
    this.showCreeuser = true;
  }
  
  

  editUser() {
    if (this.selectedUser && this.selectedUser.id) {
      this.isEditing = true;
      this.creeUserComponent.editUser();
    } else {
      console.error("Impossible d'éditer l'utilisateur: aucune ID définie.");
    }
  }
  saveUser(user: UserDto): void {
    let title = '';
    let message = '';

    if (this.creeUserComponent.isEditing) {
      title = 'Modifier l\'utilisateur';
      message = 'Voulez-vous vraiment modifier cet utilisateur?';
    } else {
      title = 'Ajouter un nouvel utilisateur';
      message = 'Voulez-vous vraiment ajouter ce nouvel utilisateur?';
    }

    const dialogRef = this.dialog.open(ModelComponent, {
      data: { title: title, message: message }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        if (this.creeUserComponent.isEditing) {
          this.authService.updateUser(user).subscribe(
            (response) => {
              this.snackBar.open('Utilisateur modifié avec succès', 'Fermer', { duration: 3000 });
              this.showCreeuser = false;
              this.updateUserList();
    
            },
            (error) => {
              console.error('Erreur lors de la modification de l\'utilisateur : ', error);
              this.snackBar.open('Erreur lors de la modification de l\'utilisateur', 'Fermer', { duration: 3000 });
            }
          );
        } else {
          this.authService.register(user).subscribe(
            (response) => {
              this.snackBar.open('Utilisateur enregistré avec succès', 'Fermer', { duration: 3000 });
              this.showCreeuser = false;
              this.updateUserList();
            },
            (error) => {
              this.snackBar.open('Erreur lors de l\'enregistrement de l\'utilisateur:', 'Fermer', { duration: 3000 });
              console.error('Erreur lors de l\'enregistrement de l\'utilisateur : ', error);
            }
          );
        }
      }
    });
  }

  deleteUserConfirmation(userId: number | undefined): void {
    if (userId) {
      const dialogRef = this.dialog.open(ModelComponent, {
        data: { title: 'Confirmation', message: 'Voulez-vous vraiment supprimer cet utilisateur?' }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.userService.deleteUser(userId).subscribe(
            () => {
              this.snackBar.open('Utilisateur supprimé avec succès', 'Fermer', { duration: 6000 });
              this.showCreeuser = false;
              this.userListComponent.cancelSelection();
              this.updateUserList();
            },
            (error) => {
              console.error('Erreur lors de la suppression de l\'utilisateur : ', error);
              this.snackBar.open('Erreur lors de la suppression de l\'utilisateur', 'Fermer', { duration: 6000 });
              this.showCreeuser = false;
            }
          );
        }
      });
    } else {
      console.error('Impossible de supprimer l\'utilisateur : aucune ID définie.');
    }
  }

  updateUserList(): void {
    this.userActionEvent.emit();
    this.userListComponent.getUsers(); 
  }
}



  /*
  
    saveUser(user: UserDto): void {
      if (this.creeUserComponent.isEditing) {
        console.log("Saving edited user:", user); 
        this.authService.updateUser(user).subscribe(
          (response) => {
            alert('Utilisateur modifié avec succès');
            this.showCreeuser = false;
            this.snackBar.open('Utilisateur modifié avec succès', 'Fermer', { duration: 3000 });

          },
          (error) => {
            console.error('Erreur lors de la modification de l\'utilisateur : ', error);
            this.snackBar.open('Erreur lors de la modification de l\'utilisateur', 'Fermer', { duration: 3000 });

          }
        );
      } else {
        console.log("Saving new user:", user); 
        this.authService.register(user).subscribe(
          (response) => {
            alert('Utilisateur enregistré avec succès');
            this.showCreeuser = false;
          },
          (error) => {
            this.snackBar.open('EErreur lors de l\'enregistrement de l\'utilisateur:', 'Fermer', { duration: 3000 });
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur : ', error);
          }
        );
      }
    }

  }
*/

  

  



