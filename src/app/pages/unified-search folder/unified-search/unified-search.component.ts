import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-unified-search',
  templateUrl: './unified-search.component.html',
  styleUrl: './unified-search.component.scss'
})

export class UnifiedSearchComponent implements OnInit {
 
  
searchResults: any;
navigateToForm(_t54: any) {
throw new Error('Method not implemented.');
}
  selectedRowIndex: any;
  allCustomers: any;
  allTools: any;
  tools: any;
  incidents: any;
Customers: any;


selectCustomer(_t54: any,_t55: number) {
throw new Error('Method not implemented.');
}
  // Data sources for each tab
  customerSearchDataSource = new MatTableDataSource<any>();
  toolSearchDataSource = new MatTableDataSource<any>();
  incidentSearchDataSource = new MatTableDataSource<any>();
  // Selected tab
  selectedTab = 'customerSearch';
  // Search options
  iscustomerIDSelected = false;
  iscustomerEmailSelected = false;
  iscontractNumberSelected = false;
  iszipCodeSelected = false;
  isphoneNumberSelected = false;
  iscompanyNameSelected = false;
  isAgentCustomerIdSelected = false;
  // Search fields
  customerID = '';
  customerEmail = '';
  contractNumber = '';
  zipCode = '';
  phoneNumber = '';
  companyName = '';
  agentCustomerId = '';
  customers =''
  // Tool search fields
  productName = '';
  serialNumber = '';
  // Tool search options
  isproductNameSelected = false;
  isserialNumberSelected = false;
 // Customers: any[] = [
  //  { ActiaCustomerID: '15553', CompanyName: 'CONSEIL GENERAL DU PUY DE DOME', Address: '123456', ContactName: 'Remarque A', PhoneNumber: 'Problème 1', FaxNumber: 'Concret 1', transporteur: 'Transporteur A' }, 
  //];
  // Incident search fields
  fileId = '';
  licensePlate = '';
  customerReference = '';
  // incident search options
  isfileIdSelected = false;
  islicensePlateSelected = false;
  iscustomerReferenceSelected = false;


  // Paginator and sort

  first!: number;
  rows!: number;
isSelectDisabled: any;

  constructor() { 
  }

  ngOnInit(): void {
    // Initialize data sources
  }
  handleClick(event: MouseEvent) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.style.borderLeft = '5px solid green';
  
  }
  // Toggle search fields
  toggleField(field: string) {
    switch (field) {
      case 'customerID':
        this.iscustomerIDSelected =!this.iscustomerIDSelected;
        this.resetOtherFields('iscustomerIDSelected');
        break;
      case 'customerE-mail':
        this.iscustomerEmailSelected =!this.iscustomerEmailSelected;
        this.resetOtherFields('iscustomerEmailSelected');
        break;
      case 'contractNumber':
        this.iscontractNumberSelected =!this.iscontractNumberSelected;
        this.resetOtherFields('iscontractNumberSelected');
        break;
      case 'zipCode':
        this.iszipCodeSelected =!this.iszipCodeSelected;
        this.resetOtherFields('iszipCodeSelected');
        break;
      case 'phoneNumber':
        this.isphoneNumberSelected =!this.isphoneNumberSelected;
        this.resetOtherFields('isphoneNumberSelected');
        break;
      case 'companyName':
        this.iscompanyNameSelected =!this.iscompanyNameSelected;
        this.resetOtherFields('iscompanyNameSelected');
        break;
      case 'AgentCustomerId':
        this.isAgentCustomerIdSelected =!this.isAgentCustomerIdSelected;
        this.resetOtherFields('isAgentCustomerIdSelected');
        break;
      case 'productName':
        this.isproductNameSelected =!this.isproductNameSelected;
        this.resetOtherFields('isproductNameSelected');
        break;
      case 'serialNumber':
        this.isserialNumberSelected =!this.isserialNumberSelected;
        this.resetOtherFields('isserialNumberSelected');
        break;
      case 'fileId':
        this.isfileIdSelected =!this.isfileIdSelected;
        this.resetOtherFields('isfileIdSelected');
        break;
      case 'licensePlate':
        this.islicensePlateSelected =!this.islicensePlateSelected;
        this.resetOtherFields('islicensePlateSelected');
        break;
      case 'customerReference':
        this.iscustomerReferenceSelected =!this.iscustomerReferenceSelected;
        this.resetOtherFields('iscustomerReferenceSelected');
        break;
    }
  }

  resetOtherFields(selectedField: string) {
    const fields = [
      'iscustomerIDSelected',
      'iscustomerEmailSelected',
      'iscontractNumberSelected',
      'iszipCodeSelected',
      'isphoneNumberSelected',
      'iscompanyNameSelected',
      'isAgentCustomerIdSelected',
      'isproductNameSelected',
      'isserialNumberSelected',
      'isfileIdSelected',
      'islicensePlateSelected',
      'iscustomerReferenceSelected'
    ];
  
    fields.forEach((field) => {
      if (field in this && field !== selectedField) {
        (this as Record<string, any>)[field] = false;;
      }
    });
  }
searchCustomers() { 
  const selectedFields = [];
  if (this.iscustomerIDSelected) selectedFields.push('customerID');
  if (this.iscustomerEmailSelected) selectedFields.push('customerEmail');
  if (this.iscontractNumberSelected) selectedFields.push('contractNumber');
  if (this.iszipCodeSelected) selectedFields.push('zipCode');
  if (this.isphoneNumberSelected) selectedFields.push('phoneNumber');
  if (this.iscompanyNameSelected) selectedFields.push('companyName');
  if (this.isAgentCustomerIdSelected) selectedFields.push('agentCustomerId');
  this.customerSearchDataSource = new MatTableDataSource<any>([]); 
   // Get the search criteria from the input fields
   const customerId = this.customerID;
   const customerEmail = this.customerEmail;
   const contractNumber = this.contractNumber;
   const zipCode = this.zipCode;
   const phoneNumber = this.phoneNumber;
   const companyName = this.companyName;
   const agentCustomerId = this.agentCustomerId;
 // Filter the array of customers based on the search criteria
   this.customers = this.allCustomers.filter((customer: { customerId: string | string[]; email: string | string[]; contractNumber: string | string[]; zipCode: string | string[]; phoneNumber: string | string[]; companyName: string | string[]; agentCustomerId: string | string[]; }) => {
     return (customer.customerId.includes(customerId) ||
             customer.email.includes(customerEmail) ||
             customer.contractNumber.includes(contractNumber) ||
             customer.zipCode.includes(zipCode) ||
             customer.phoneNumber.includes(phoneNumber) ||
             customer.companyName.includes(companyName) ||
             customer.agentCustomerId.includes(agentCustomerId));
   }); 
}


searchTools() {
  const selectedFields = [];
  if (this.isproductNameSelected) selectedFields.push('productName');
  if (this.isserialNumberSelected) selectedFields.push('serialNumber');
  this.toolSearchDataSource = new MatTableDataSource<any>([]);

  const productName = this.productName;
  const serialNumber = this.serialNumber;

  this.tools = this.allTools.filter((tool: { productName: string | string[]; serialNumber: string | string[]; }) => {
    return (tool.productName.includes(productName) ||
            tool.serialNumber.includes(serialNumber));
  });}


  searchIncidents(): void {
    const selectedFields = [];
    if (this.isfileIdSelected) selectedFields.push('fileId');
    if (this.islicensePlateSelected) selectedFields.push('licensePlate');
    if (this.iscustomerReferenceSelected) selectedFields.push('customerReference');
    this.incidentSearchDataSource = new MatTableDataSource<any>([]);
  
    const fileId = this.fileId;
    const licensePlate = this.licensePlate;
    const customerReference = this.customerReference;
  
    this.incidents = this.incidents.filter((incident: { fileId: string | string[]; licensePlate: string | string[]; customerReference: string | string[]; }) => {
      return (incident.fileId.includes(fileId) ||
              incident.licensePlate.includes(licensePlate) ||
              incident.customerReference.includes(customerReference));
    });}
   

  }