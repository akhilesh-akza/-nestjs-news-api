import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CredentialsDTO {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}