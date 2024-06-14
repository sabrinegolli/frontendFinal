import { Profil } from "./Profil";

export interface RegisterRequest {
  id?:number
    nom?: string;
    prenom?: string;
    login?: string;
    password?: string;
    email?: string;
    profil?: Profil;
  }