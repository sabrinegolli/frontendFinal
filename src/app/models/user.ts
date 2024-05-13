import { Agence } from "./Agence";
import { SsProfil } from "./SsProfil";


export interface User {
    id? : number ;
      nom?: string;
      prenom?: string;
      login?: string;
      email?: string;
      ssProfil?: SsProfil;
      agence?:Agence
    }