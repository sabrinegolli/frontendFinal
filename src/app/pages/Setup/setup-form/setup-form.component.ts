import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetupService } from '../../../services/setup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SetupDisplayData } from '../../../models/SetupDisplayData';
import { TypeSetup } from '../../../models/TypeSetup';
import { TypeSetupService } from '../../../services/type-setup.service';
import { types } from 'util';

@Component({
  selector: 'app-setup-form',
  templateUrl: './setup-form.component.html',
  styleUrl: './setup-form.component.scss'
})
export class SetupFormComponent implements OnInit {
  setupForm!: FormGroup;
  @Input() showForm: boolean = false;
  typeOutils : any ;
  isEditing:boolean = false;
  @Output() saveSetup: EventEmitter<any> = new EventEmitter<any>();
  _setup:SetupDisplayData[]=[];
  @Input() typeSetups:TypeSetup[]=[];
type:TypeSetup[]=[];
  constructor(private formBuilder: FormBuilder, private setupService: SetupService,private typeSetupService: TypeSetupService,  private snackBar: MatSnackBar) {}

  
  ngOnInit(): void {
      this.setupForm = this.formBuilder.group({
 
        typeOutil: [null, Validators.required],
        typeSetup: [null, Validators.required],
        website: ['', Validators.required],
      });
      this.fetchSetups();  
          this.fetchTypeOutils();  
      console.log ("typesetup received",this.typeSetups ); 
    this.initForm();
this.fetchTypeSetups();
  }
  initForm(): void {
    this.setupForm = this.formBuilder.group({
      id: [null],
 
      typeOutil: [null, Validators.required],
      typeSetup: [null, Validators.required],
      website: ['', Validators.required],

    });
  }
fetchTypeOutils(){
this.setupService.getTypeOutils().subscribe(typeOutils =>this.typeOutils=typeOutils

  
)



}

 
 
 fetchTypeSetups() {
  this.typeSetupService.getTypeSetup()
    .subscribe(type => this.type = type);
}

  onSubmit() {
    if (this.setupForm.valid) {
      this.setupService.addSetup(this.setupForm.value).subscribe(
        (response) => {
          alert('setup enregistré avec succès');
          this.setupForm.reset();
          window.location.reload();
          console.log('Form Values:', this.setupForm.value);


        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement de setup : ', error);
          this.snackBar.open('Erreur lors de l\'enregistrement de setup', 'Fermer', { duration: 3000 });
        }
      );
    } else {
     
      this.markFormGroupTouched(this.setupForm);
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
  @Input() set setup(setup: SetupDisplayData | null) {
    if (setup) {
    
    // this.isEditing=true;
      this.setupForm.patchValue(setup);
      this.setupForm.disable(); // Disable form if setup is set, you can remove this line if you want form to be always editable
      this.showForm = true;
      console.log('Received setup:', setup);
    } else {
      // this.isEditing=true;
         this.resetAndEnableForm();
    }
  }

  resetAndEnableForm() {
    this.setupForm.reset();
    this.setupForm.enable();
    // this.isEditing=false;
    this.showForm = true;
  }
  cancelForm() {
    this.showForm = false;
    this.resetForm();
  }
  resetForm() {
    this.setupForm.reset();
    this.isEditing = false;
  }

  fetchSetups() {
    this.setupService.getSetups()
      .subscribe(typeSetups => this.typeSetups = typeSetups);
  }
  editSetup() {
  

    this.setupForm.enable();
    this.isEditing = true;
  }
  
stringifySite(setupData: SetupDisplayData): string {
  return JSON.stringify(setupData);
}

 

}

