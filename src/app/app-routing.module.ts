import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfilUserComponent } from './pages/profil/profil-user/profil-user.component';
import { ChangerMotpasseComponent } from './pages/profil/changer-motpasse/changer-motpasse.component';
import { ManagementUserComponent } from './pages/Users/management-user/management-user.component';

import { UnifiedHomeComponent } from './pages/unified-search folder/unified-home/unified-home.component';
import { SalescontractComponent } from './salescontract/salescontract.component';
import { IncidentfileComponent } from './incidentfile/incidentfile.component';
import { CustomerfileComponent } from './customerfile/customerfile.component';
import { MaterialcomponentfileComponent } from './pages/unified-search folder/materialcomponentfile/materialcomponentfile.component';
import { PackactionComponent } from './packaction/packaction.component';
import { SearchDoublesComponent } from './pages/search-doubles/search-doubles.component';
import { StandbyComponent } from './standby/standby.component';
import { NewcommpackComponent } from './newcommpack/newcommpack.component';
import { AddelementComponent } from './addelement/addelement.component';
import { UpgradingpackComponent } from './upgradingpack/upgradingpack.component';
import { LicenceComponent } from './licence/licence.component';
import { ToolhistoryComponent } from './toolhistory/toolhistory.component';





const routes: Routes = [

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
    path: 'ProfilUser',
    component: ProfilUserComponent,


  },

  {
    path: 'password',
    component: ChangerMotpasseComponent,
 

  },

  {
    path: 'listUser',
    component:ManagementUserComponent ,

  },



  {
    path: 'unifiedsearch',
    component: UnifiedHomeComponent,
  },

  {
    path: 'salescontract',
    component: SalescontractComponent,
  },

  {
    path: 'incidentfile',
   component:IncidentfileComponent,
  },

  
  {
    path: 'customerfile',
   component:CustomerfileComponent,
  },


  {
    path: 'materialcomponent',
   component:MaterialcomponentfileComponent,
  },
 
  {
    path: 'packaction',
   component:PackactionComponent,
  },

  {
    path: 'searchdoubles',
    component: SearchDoublesComponent,
  },

  {
    path: 'standby',
    component: StandbyComponent,
  }, 
  {path: 'newcommpack',
  component: NewcommpackComponent,

  },
  {path: 'addelement' , 
    component:AddelementComponent,
  },
  {path: 'upgrading' , 
  component:UpgradingpackComponent,
},
{path: 'licence' , 
component:LicenceComponent,
},
{path: 'toolhistory' , 
component:ToolhistoryComponent,
},



  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
