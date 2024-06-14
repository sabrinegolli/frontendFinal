import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDto } from '../../../models/UserDto';
import { Observable } from 'rxjs/internal/Observable';
import { Agence } from '../../../models/Agence';
import { Profil } from '../../../models/Profil';
import { AgenceService } from '../../../services/agence.service';

@Component({
  selector: 'app-creeuser',
  templateUrl: './creeuser.component.html',
  styleUrl: './creeuser.component.scss'
})
export class CreeuserComponent implements OnInit {
  registerForm!: FormGroup;
  @Input() showForm: boolean = false;
  isEditing: boolean = false;
  @Output() saveUser: EventEmitter<any> = new EventEmitter<any>();
  agences: Agence[] = []; 
  constructor(private formBuilder: FormBuilder, private authService: AuthService ,private snackBar: MatSnackBar , private agenceService: AgenceService) { }
  profils = Object.keys(Profil); 
  ngOnInit(): void {
    
 
      this.registerForm = this.formBuilder.group({
        id: [null],
        login: ['', Validators.required],
        email: ['',Validators.required],
        prenom: ['',Validators.required],
        nom: ['',Validators.required],
        password: ['', Validators.required],
        agence: [null, Validators.required],

        profil: ['',Validators.required],
        langue: ['fr',Validators.required],
      
    
        
      });
 
      this.fetchSites();        
      console.log ("gneces",this.agences ); 

    this.initForm();
   
   
  }
  initForm(): void {
   
 
      this.registerForm = this.formBuilder.group({
        id: [null],
        login: ['', Validators.required],

        email: ['',Validators.required],
        prenom: ['',Validators.required],
        nom: ['',Validators.required],
        password: ['', Validators.required],
        agence: [null, Validators.required],


        profil: ['',Validators.required],
        langue: ['fr',Validators.required],
      });
  

  } 
  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          alert('Utilisateur enregistré avec succès');
          this.registerForm.reset();
          window.location.reload();
          console.log('Form Values:', this.registerForm.value);


        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement de l\'utilisateur : ', error);
          this.snackBar.open('Erreur lors de l\'enregistrement de l\'utilisateur', 'Fermer', { duration: 3000 });
        }
      );
    } else {
     
      this.markFormGroupTouched(this.registerForm);
      this.snackBar.open('Veuillez remplir correctement le formulaire', 'Fermer', { duration: 3000 });
    }
  }
  

  

   
    markFormGroupTouched(formGroup: FormGroup) {
      Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
  
        if (control instanceof FormGroup) {
          this.markFormGroupTouched(control);
        }
      });
    }

    resetAndEnableForm() {
      this.registerForm.reset();
      this.registerForm.enable();
      this.showForm = true;
    }
  
    @Input() set user(user: UserDto | null) {
      if (user) {
        const agenceName = user.agence?.nom; 
        const selectedAgence = this.agences.find(agence => agence.nom === agenceName); 
        
        if (selectedAgence) {
        
          user.agence = selectedAgence;
        }
        
   
        this.registerForm.patchValue(user);
        
      
        this.registerForm.disable(); 

        this.showForm = true; 
        
        console.log('Received User:', user);
      } else {
  
        this.resetAndEnableForm(); 
      }
    }
    
    cancelForm() {
      this.showForm = false;
      this.resetForm(); 
 
    }

    resetForm() {
      this.registerForm.reset();
      this.isEditing = false; 
    }
  
    editUser() {


      this.registerForm.enable();
      this.isEditing = true;
    }

    fetchSites() {
      this.agenceService.getAllAgences()
        .subscribe(agences => this.agences = agences);
    }
    stringifySite(agence: Agence): string {
      return JSON.stringify(agence);
    }
    
/*
  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          alert('Utilisateur enregistré avec succès');
          this.registerForm.reset();
          window.location.reload();
          console.log('Form Values:', this.registerForm.value);
        },
        (error) => {
          if (error.status === 400 && error.error) {
            const validationErrors = error.error;
            Object.keys(validationErrors).forEach((fieldName) => {
              const formControl = this.registerForm.get(fieldName);
              if (formControl) {
                formControl.setErrors({ serverError: validationErrors[fieldName] });
              }
            });
          } else {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur : ', error);
            this.snackBar.open('Erreur lors de l\'enregistrement de l\'utilisateur', 'Fermer', { duration: 3000 });
          }
        }
      );
    } else {
      this.markFormGroupTouched(this.registerForm);
      this.snackBar.open('Veuillez remplir correctement le formulaire', 'Fermer', { duration: 3000 });
    }
  }
  */
}
