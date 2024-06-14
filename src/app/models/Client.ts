export interface Client {
    id: number;
    type: number;
    code: string;
    nom: string;
    adresse1: string;
    adresse2: string;
    codePostal: string;
    ville: string;
    pays: string;
    telephone: string;
    mobile: string;
    fax: string;
    email: string;
    remarque: string;
    referenceAgence: string;
    idDistributeur: number;
    refDistributeur: string;
    valide: boolean;
    deleted: boolean;
    contractNumber: number;
  }
  