import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  currentUser!: User;
  constructor(private authService: AuthService, private router: Router ,private userService: UserService) { }
  logout(): void {
    this.authService.logout().subscribe(
      () => {
        // Rediriger vers la page de login après le logout
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.userService.getCurrentUser().subscribe(
      user => {
        this.currentUser = user;
      },
      error => {
        console.error(error);
      }
    );
  }
}
