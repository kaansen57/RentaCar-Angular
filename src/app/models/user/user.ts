export interface User{
    id:number;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    firstName: string;
    lastName: string;
    status:boolean;
    findexScore:number;
}