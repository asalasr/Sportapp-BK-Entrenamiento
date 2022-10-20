/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString, IsOptional} from 'class-validator';

export class RutinaDiariaDto {

    @IsString()
    @IsNotEmpty()
    readonly actividad: string;


    @IsString()
    @IsOptional()
    readonly descripcion: string;

    @IsString()
    @IsOptional()
    readonly tiempo: string;


}
