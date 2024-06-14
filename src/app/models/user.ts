import { Profil } from "./Profil";
import { Agence } from "./Agence";

export interface User {
    id? : number ;
      nom?: string;
      prenom?: string;
      login?: string;
      email?: string;
      profil?: Profil;
      agence?:Agence
    }