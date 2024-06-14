import { User } from "./User";

export interface Agence {
    id : number ;
    nom?: string;
    code?:string;  
     type ?: string;
     email?: string;
     idParent?:number;
     activationEmail?:boolean;
     rappelMail?:boolean;
     idStock?:number;
    user?:User ; 
   
}