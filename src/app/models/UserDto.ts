
import { Agence } from "./Agence";
import { SsProfil } from "./SsProfil";


export interface UserDto {
  id? : number ;
    code?: string;
    nom?: string;
    prenom?: string;
    login?: string;
    email?: string;
    ssProfil?: SsProfil;
    agence?:Agence ;
    langKey?:string; 
  }