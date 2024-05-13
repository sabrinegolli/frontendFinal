import { Component, ElementRef, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-changer-motpasse',
  templateUrl: './changer-motpasse.component.html',
  styleUrl: './changer-motpasse.component.scss'
})
export class ChangerMotpasseComponent  implements OnInit{
  newPassword: string = '';
  confirmPassword: string = '';
  userId: number | undefined; 
  passwordChangeSuccess: boolean | null = null;
  passwordsDoNotMatch: boolean = false;
  messageVisible: boolean = false; // Flag to control message visibility

  showSuccessMessage: boolean = false; // New property for success message
  constructor(private userService: UserService) {}

    ngOnInit() {
      this.getCurrentUser();
    }
  
    getCurrentUser() {
      this.userService.getCurrentUser().subscribe({
        next: (user) => {
          this.userId = user.id;
        },
        error: (error) => {
          console.error("Erreur lors de la récupération de l'utilisateur actuel", error);
        }
      });
      
    }
  
    changePassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.passwordsDoNotMatch = true;
        return;
      } else {
        this.passwordsDoNotMatch = false;
      }
  
      if (!this.newPasswordIsValid() || !this.passwordIsStrongEnough()) {
        return;
      }
      if (this.userId === undefined) {
        console.error("Impossible de changer le mot de passe. ID utilisateur non défini.");
        return;
      }
  
      this.userService.changePassword(this.userId, {
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword
      }).subscribe({
        next: (resp) => {
          this.passwordChangeSuccess = true;
          console.log("Mot de passe changé avec succès", resp);
        },
        error: (error) => {
          this.passwordChangeSuccess = false;
          console.error("Erreur lors du changement de mot de passe", error);
        }
      });
    }
    newPasswordIsValid(): boolean {
      return this.newPassword.length >= 4 && this.newPassword.length <= 50;
    }
  
    passwordIsStrongEnough(): boolean {
      const hasUppercase = /[A-Z]/.test(this.newPassword);
      const hasLowercase = /[a-z]/.test(this.newPassword);
      const hasNumber = /[0-9]/.test(this.newPassword);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.newPassword);
      return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
    }
  }
  
