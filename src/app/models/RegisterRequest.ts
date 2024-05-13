import { SsProfil } from "./SsProfil";

export interface RegisterRequest {
  id?:number
    nom?: string;
    prenom?: string;
    login?: string;
    password?: string;
    email?: string;
    ssProfil?: SsProfil;
  }