import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Agence } from '../../../models/Agence';
import { AgenceService } from '../../../services/agence.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-localstock-form',
  templateUrl: './localstock-form.component.html',
  styleUrl: './localstock-form.component.scss'
})
export class LocalstockFormComponent {
//   isEditing: boolean = false;
//   @Input() showForm: boolean = false;
//     @Output() saveAgence: EventEmitter<Agence> = new EventEmitter<Agence>();
//     agenceForm!: FormGroup;
  
//     constructor(private formBuilder: FormBuilder, private agenceService: AgenceService) { }
//     @Input() set agence(agence: Agence | null) {
//       if (agence) {
    
   
//         this.agenceForm.patchValue(agence);
        
      
//         this.agenceForm.disable(); 

//         this.showForm = true; 
        
//         console.log('Received agence:', agence);
//       } else {
  
//         this.resetAndEnableForm(); 
//       }
//     }
    
//     ngOnInit(): void {
//       this.agenceForm = this.formBuilder.group({
//         id: [null],
//         nom: ['', Validators.required],
//         code: ['', Validators.required],
//         type: ['', Validators.required],
//         email: ['', Validators.required]
//       });
//       this.initForm();
//     }
   
//     onSubmit() {
//       if (this.agenceForm.valid) {
//         const agence: Agence = this.agenceForm.value;
//         if (agence.id) {
//           this.agenceService.updateAgence(agence.id, agence).subscribe({
//             next: () => {
//               this.saveAgence.emit(agence);
//               alert('Agence mise à jour avec succès');
//             },
//             error: (error) => console.error('Erreur lors de la mise à jour de l\'agence : ', error)
//           });
//         } else {
//           this.agenceService.createAgence(agence).subscribe({
//             next: () => {
//               this.saveAgence.emit(agence);
//               alert('Agence créée avec succès');
//             },
//             error: (error) => console.error('Erreur lors de la création de l\'agence : ', error)
//           });
//         }
//       } else {
//         this.agenceForm.markAllAsTouched();
//       }
//     }


//     editAgence() {
  

//       this.agenceForm.enable();
//       this.isEditing = true;
//     }




// initForm():void {
//   this.agenceForm = this.formBuilder.group({
//     id: [null],
//     nom: ['', Validators.required],
//     code: ['', Validators.required],
//     type: ['', Validators.required],
//     email: ['', Validators.required]
//   });
// }



// markFormGroupTouched(formGroup: FormGroup) {
//   Object.values(formGroup.controls).forEach(control => {
//     control.markAsTouched();

//     if (control instanceof FormGroup) {
//       this.markFormGroupTouched(control);
//     }
//   });
// }

// resetAndEnableForm() {
//   this.agenceForm.reset();
//   this.agenceForm.enable();
//   this.showForm = true;
// }

// cancelForm() {
//   this.showForm = false;
//   this.resetForm(); 

// }

// resetForm() {
//   this.agenceForm.reset();
//   this.isEditing = false; 
// }


// stringifySite(agence: Agence): string {
//   return JSON.stringify(agence);
// }

  /*
ngOnChanges(changes:SimpleChanges){
  if(changes.agence &&this.agence){
    this.agenceForm.patchValue(this.agence);
  }
}
*/
  }
  
  