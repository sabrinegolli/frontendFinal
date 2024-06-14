export interface Product {
    name: string;
    serialNumber: string;
    dateCode: string;
    vciSerialNumber: string;
    underWarranty: boolean;
    materialComponents: MaterialComponent[];
    licenses: License[];
  }
  
  export interface MaterialComponent {
    productName: string;
    serialNumber: string;
    dateCode: string;
    warrantyEndDate: string;
  }
  
  export interface License {
    productName: string;
    invoiceId: string;
    activated: boolean;
    subscriptionEndDate: string;
    majorVersion: string;
  }

  export interface Group {
    isGroup: boolean;
    name: string;
    expanded: boolean;
    products: Product[];
  }