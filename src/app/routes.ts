import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserHomeComponent } from './pages/user_managment/user-home/user-home.component';
import { UnifiedHomeComponent } from './pages/unified-search folder/unified-home/unified-home.component';
import { SearchdoublesComponent } from './pages/search-doubles/searchdoubles.component';
import { StandbyincidentlistComponent } from './pages/stand-by-incident-list/standbyincidentlist.component';
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
    path: 'userhome',
    component: UserHomeComponent,
  },
  {
    path: 'searchdoubles',
    component: SearchdoublesComponent,
  },


  {
    path: 'unifiedsearch',
    component: UnifiedHomeComponent,
  },

  {
    path: 'standbyincidentlist',
    component: StandbyincidentlistComponent,
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
