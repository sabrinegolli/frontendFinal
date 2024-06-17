import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DialogComponent } from './components/dialog/dialog.component';
import { UserlistComponent } from './pages/Users/userlist/userlist.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule, provideHttpClient, withFetch } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { PaginatorModule } from 'primeng/paginator';
import { ProfilUserComponent } from './pages/profil/profil-user/profil-user.component';
import { PasswordStrengthBarComponent } from './components/password-strength-bar/password-strength-bar.component';
import { ModelComponent } from './components/model/model.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ManagementUserComponent } from './pages/Users/management-user/management-user.component';
import { CreeuserComponent } from './pages/Users/creeuser/creeuser.component';
import { AgenceManagmentComponent } from './pages/Agence/agence-managment/agence-managment.component';
import { AgenceFormComponent } from './pages/Agence/agence-form/agence-form.component';
import { AgenceListComponent } from './pages/Agence/agence-list/agence-list.component';
import { SetupFormComponent } from './pages/Setup/setup-form/setup-form.component';
import { SetupListComponent } from './pages/Setup/setup-list/setup-list.component';
import { SetupManagmentComponent } from './pages/Setup/setup-managment/setup-managment.component';
import { ChangerMotpasseComponent } from './pages/profil/changer-motpasse/changer-motpasse.component';
import { CustomerfileComponent } from './pages/customerfile/customerfile.component';
import { IncidentfileComponent } from './pages/incidentfile/incidentfile.component';
import { PackactionComponent } from './pages/packaction/packaction.component';
import { SalescontractComponent } from './pages/salescontract/salescontract.component';
import { MaterialcomponentfileComponent } from './pages/unified-search folder/materialcomponentfile/materialcomponentfile.component';
import { UnifiedFormComponent } from './pages/unified-search folder/unified-form/unified-form.component';
import { UnifiedHomeComponent } from './pages/unified-search folder/unified-home/unified-home.component';
import { UnifiedSearchComponent } from './pages/unified-search folder/unified-search/unified-search.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { AddelementComponent } from './pages/addelement/addelement.component';
import { LicenceComponent } from './pages/licence/licence.component';
import { NewcommpackComponent } from './pages/newcommpack/newcommpack.component';
import { SearchDoublesComponent } from './pages/search-doubles/search-doubles.component';
import { StandbyComponent } from './pages/standby/standby.component';
import { ToolhistoryComponent } from './pages/toolhistory/toolhistory.component';
import { UpgradingpackComponent } from './pages/upgradingpack/upgradingpack.component';
import { PasswordModule } from 'primeng/password';
import { RepairstocklistComponent } from './pages/repairstocklist/repairstocklist.component';
import { LocalstockFormComponent } from './pages/LocalStock/localstock-form/localstock-form.component';
import { LocalstockListComponent } from './pages/LocalStock/localstock-list/localstock-list.component';
import { LocalstockManagmentComponent } from './pages/LocalStock/localstock-managment/localstock-managment.component';
import { CustomerUnifiedFormComponent } from './pages/customer-unified-search/customer-unified-form/customer-unified-form.component';
import { CustomerUnifiedHomeComponent } from './pages/customer-unified-search/customer-unified-home/customer-unified-home.component';
import { CustomerUnifiedSearchComponent } from './pages/customer-unified-search/customer-unified-search/customer-unified-search.component';
import { IncidentUnifiedFormComponent } from './pages/incident-unified-search/incident-unified-form/incident-unified-form.component';
import { IncidentUnifiedHomeComponent } from './pages/incident-unified-search/incident-unified-home/incident-unified-home.component';
import { IncidentUnifiedSearchComponent } from './pages/incident-unified-search/incident-unified-search/incident-unified-search.component';
import { ToolUnifiedHomeComponent } from './pages/tool-unified-search/tool-unified-home/tool-unified-home.component';
import { ToolUnifiedSearchComponent } from './pages/tool-unified-search/tool-unified-search/tool-unified-search.component';
import { ToolUnifiedFormComponent } from './pages/tool-unified-search/tool-unified-form/tool-unified-form.component';
import { ValidatesalesComponent } from './pages/validatesales/validatesales.component';
import { AddCustomerComponent } from './pages/addcustomer/addcustomer.component';
import { SearchcustomerComponent } from './pages/searchcustomer/searchcustomer.component';
import { StocklistComponent } from './pages/stocklist/stocklist.component';
import { ToolsearchComponent } from './pages/toolsearch/toolsearch.component';







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
    AgenceManagmentComponent,
    AgenceFormComponent,
    AgenceListComponent,
    SetupListComponent,
    SetupFormComponent,
    SetupManagmentComponent,
    CustomerfileComponent,
    IncidentfileComponent,
    PackactionComponent,
    SalescontractComponent,
    MaterialcomponentfileComponent,
    UnifiedFormComponent,
    UnifiedHomeComponent,
    UnifiedSearchComponent,
    AddelementComponent,
    LicenceComponent,
    NewcommpackComponent,
    SearchDoublesComponent,
    StandbyComponent,
    ToolhistoryComponent,
    UpgradingpackComponent,
    RepairstocklistComponent,
    LocalstockFormComponent,
    LocalstockListComponent,
    LocalstockManagmentComponent,
    CustomerUnifiedFormComponent,
    CustomerUnifiedHomeComponent,
    CustomerUnifiedSearchComponent,
    IncidentUnifiedFormComponent,
    IncidentUnifiedHomeComponent,
    IncidentUnifiedSearchComponent,
    ToolUnifiedHomeComponent,
    ToolUnifiedSearchComponent,
    ToolUnifiedFormComponent,
    ValidatesalesComponent,
    AddCustomerComponent,
    SearchcustomerComponent,
    StocklistComponent,
    ToolsearchComponent,
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    MatGridListModule,
    FontAwesomeModule,
    MatTabsModule,
    PaginatorModule,
    PasswordModule,
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
export class AppModule {
}
