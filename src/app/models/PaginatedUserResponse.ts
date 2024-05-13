import { UserDto } from "./UserDto";

export interface PaginatedUserResponse {
    content?: UserDto[]; 
    totalElements?: number; 

}