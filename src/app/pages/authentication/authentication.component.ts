import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../models/RegisterRequest';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder  ,private snackBar: MatSnackBar,) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  isLoginValid(): boolean {
    const loginControl = this.loginForm.get('login');
    return !!loginControl && loginControl.valid && (loginControl.dirty || loginControl.touched);
  }

  isPasswordValid(): boolean {
    const passwordControl = this.loginForm.get('password');
    return !!passwordControl && passwordControl.valid && (passwordControl.dirty || passwordControl.touched);
  }

  isLoginInvalid(): boolean {
    const loginControl = this.loginForm.get('login');
    return !!loginControl && loginControl.invalid && (loginControl.dirty || loginControl.touched);
  }

  isPasswordInvalid(): boolean {
    const passwordControl = this.loginForm.get('password');
    return !!passwordControl && passwordControl.invalid && (passwordControl.dirty || passwordControl.touched);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { login, password } = this.loginForm.value;

      this.authService.authenticate({ login, password }).subscribe(
        response => {
          const accessToken = response.access_token;
          const refreshToken = response.refresh_token;

          this.authService.setTokens(accessToken, refreshToken);
          sessionStorage.setItem('accessToken', accessToken);
          sessionStorage.setItem('refreshToken', refreshToken);
          const decodedToken = this.authService.decodeToken(accessToken);

          this.authService.getUserBylogin(decodedToken.sub).subscribe(
            (user: RegisterRequest) => {
              sessionStorage.setItem('user', JSON.stringify(user));
              this.snackBar.open('Login successful', 'Fermer', { duration: 3000 });

              this.router.navigate(['/acceuil']);
            },
            error => {
              console.error(error);
              this.snackBar.open('An error occurred while fetching user data', 'Fermer', { duration: 3000 });

            
            }
          );
        },
        error => {
          console.error(error);
          this.snackBar.open('Invalid login credentials', 'Fermer', { duration: 3000 });

      
        }
      );
    } else {
      this.snackBar.open('Please fill in all required fields correctly.', 'Fermer', { duration: 3000 });


    }
  }
}