import { Profil } from "./Profil";
import { Agence } from "./Agence";

export interface UserDto {
  id? : number ;
    code?: string;
    nom?: string;
    prenom?: string;
    login?: string;
    email?: string;
    profil?: Profil;
    agence?:Agence ;
    langKey?:string; 
  }