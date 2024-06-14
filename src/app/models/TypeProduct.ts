import { TypeOutil } from "./TypeOutil";

export interface TypeProduct {
    id?: number;
    nom?: string;
    code?: string;
    description?: string;
    typeOutils?: TypeOutil[];
}