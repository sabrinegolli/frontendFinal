import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatTabsModule} from '@angular/material/tabs'; 
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpClientXsrfModule, provideHttpClient, withFetch, } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordStrengthBarComponent } from './components/password-strength-bar/password-strength-bar.component';
import { ModelComponent } from './components/model/model.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UnifiedFormComponent } from './pages/unified-search folder/unified-form/unified-form.component';
import { UnifiedHomeComponent } from './pages/unified-search folder/unified-home/unified-home.component';
import { UnifiedSearchComponent } from './pages/unified-search folder/unified-search/unified-search.component';
import { SearchDoublesComponent } from './pages/search-doubles/search-doubles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManagementUserComponent } from './pages/Users/management-user/management-user.component';
import { CreeuserComponent } from './pages/Users/creeuser/creeuser.component';
import { UserlistComponent } from './pages/Users/userlist/userlist.component';
import { ChangerMotpasseComponent } from './pages/profil/changer-motpasse/changer-motpasse.component';
import { ProfilUserComponent } from './pages/profil/profil-user/profil-user.component';
import { MaterialcomponentfileComponent } from './pages/unified-search folder/materialcomponentfile/materialcomponentfile.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DashboardComponent,
    NavbarComponent,
    DialogComponent,
    ManagementUserComponent,
    CreeuserComponent,
    UserlistComponent,
    ChangerMotpasseComponent,
    ProfilUserComponent,
    PasswordStrengthBarComponent,
    ModelComponent,
    UnifiedFormComponent,
    UnifiedHomeComponent,
    UnifiedSearchComponent,
    SearchDoublesComponent,
    UnifiedFormComponent,
    MaterialcomponentfileComponent, ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule ,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    CommonModule ,
    MatTableModule ,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    MatGridListModule,  
    FontAwesomeModule,
    MatTabsModule,
    PaginatorModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),

    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('accessToken');
        },
        allowedDomains: ['*'], 
        disallowedRoutes: [] 
      }
    })
  
  ],
  providers: [

    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
