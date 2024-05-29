import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { UnifiedHomeComponent } from './pages/unified-search folder/unified-home/unified-home.component';


export const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'login',
    component: AuthenticationComponent,
  },
  {
    path: 'acceuil',
    component: DashboardComponent,
  },





  {
    path: 'unifiedsearch',
    component: UnifiedHomeComponent,
  },


  



  //{
  // path: 'profileform',
  // component: ProfileFormComponent
  //  ,
  //},
  /* { path: 'home',
    component:HomeComponent ,},
 
   { path: '', redirectTo: 'login', pathMatch: 'full' },*/
];
