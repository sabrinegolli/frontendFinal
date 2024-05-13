import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrl: './profil-user.component.scss'
})
export class ProfilUserComponent implements OnInit {
  user: any; 
  isLangueEnabled: boolean = false; 
  langList: Array<string> | undefined;
  success!: string;
  error!: string;
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.getCurrentUser();

  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.user = user;
        this.isLangueEnabled = true; 
      },
      error: (error) => {
        console.error("Erreur lors de la récupération de l'utilisateur actuel", error);
      }
    });
  }




}