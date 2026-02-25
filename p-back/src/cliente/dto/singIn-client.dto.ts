import { IsString } from 'class-validator';

export class SingInClienteDto {

    @IsString()
    client: string;

    @IsString()
    password: string;
}
