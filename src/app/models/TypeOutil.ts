import { NeedSetup } from "./NeedSetup";
import { Pack } from "./Pack";

export interface TypeOutil {
    id?: number;
    code?: string;
    nom?: string;
    urlDocumentation?: string;
    
    codeSarc?: string;
    obsolete?: boolean;
    masque?: string;
    reseauId?: number; // Only ID to reference Reseau
    typeProductId?: number; // Only ID to reference TypeProduct
    groupeId?: number; // Only ID to reference Groupe
    packs?: Pack[]; // Assuming Pack is defined similarly
    needSetups?: NeedSetup[];
    
}