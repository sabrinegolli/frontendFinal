import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfilUserComponent } from './pages/profil/profil-user/profil-user.component';
import { ChangerMotpasseComponent } from './pages/profil/changer-motpasse/changer-motpasse.component';
import { ManagementUserComponent } from './pages/Users/management-user/management-user.component';
import { AgenceManagmentComponent } from './pages/Agence/agence-managment/agence-managment.component';
import { SetupManagmentComponent } from './pages/Setup/setup-managment/setup-managment.component';
import { CustomerfileComponent } from './pages/customerfile/customerfile.component';
import { IncidentfileComponent } from './pages/incidentfile/incidentfile.component';
import { PackactionComponent } from './pages/packaction/packaction.component';
import { SalescontractComponent } from './pages/salescontract/salescontract.component';
import { MaterialcomponentfileComponent } from './pages/unified-search folder/materialcomponentfile/materialcomponentfile.component';
import { UnifiedHomeComponent } from './pages/unified-search folder/unified-home/unified-home.component';
import { AddelementComponent } from './pages/addelement/addelement.component';
import { LicenceComponent } from './pages/licence/licence.component';
import { NewcommpackComponent } from './pages/newcommpack/newcommpack.component';
import { SearchDoublesComponent } from './pages/search-doubles/search-doubles.component';
import { StandbyComponent } from './pages/standby/standby.component';
import { ToolhistoryComponent } from './pages/toolhistory/toolhistory.component';
import { UpgradingpackComponent } from './pages/upgradingpack/upgradingpack.component';
import { RepairstocklistComponent } from './pages/repairstocklist/repairstocklist.component';
import { CustomerUnifiedHomeComponent } from './pages/customer-unified-search/customer-unified-home/customer-unified-home.component';
import { ToolUnifiedHomeComponent } from './pages/tool-unified-search/tool-unified-home/tool-unified-home.component';
import { IncidentUnifiedHomeComponent } from './pages/incident-unified-search/incident-unified-home/incident-unified-home.component';
import { AddCustomerComponent } from './pages/addcustomer/addcustomer.component';
import { SearchcustomerComponent } from './pages/searchcustomer/searchcustomer.component';
import { StocklistComponent } from './pages/stocklist/stocklist.component';
import { ToolsearchComponent } from './pages/toolsearch/toolsearch.component';
import { ValidatesalesComponent } from './pages/validatesales/validatesales.component';
import { NewpackComponent } from './newpack/newpack.component';
import { ExistingcompackComponent } from './existingcompack/existingcompack.component';
import { UpgradeComponent } from './upgrade/upgrade.component';



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
    path: 'agences',
    component:AgenceManagmentComponent ,

  },{
    path: 'setup',
    component:SetupManagmentComponent ,

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
{
  path: 'repairstocklist',
  component:RepairstocklistComponent ,

},
{ path: 'validatesales', component: ValidatesalesComponent },
{ path: 'addcustomer', component: AddCustomerComponent },
{ path: 'searchcustomer', component: SearchcustomerComponent },
{ path: 'stocklist', component: StocklistComponent },
{ path: 'toolsearch', component: ToolsearchComponent },
{ path: 'customerunifiedsearch', component:CustomerUnifiedHomeComponent },
  { path: 'toolunifiedsearch',component:ToolUnifiedHomeComponent },
  { path: 'incidentunifiedsearch', component:IncidentUnifiedHomeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'newcommercialpack' ,component:NewcommpackComponent},
  { path: 'newpack' , component:NewpackComponent},
  { path: 'existingcompack' , component:ExistingcompackComponent},
  { path: 'materialcomfile' , component:MaterialcomponentfileComponent},
  { path: 'upgrade' , component:UpgradeComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
