import { IsString } from 'class-validator';

export class SingInClienteDto {

    @IsString()
    cliente: string;

    @IsString()
    password: string;
}
