/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString} from 'class-validator';

export class PlanEntrenamientoDto {

    @IsString()
    @IsNotEmpty()
    readonly descripcion: string;
    
    @IsString()
    @IsNotEmpty()
    readonly nivel: string;
    
    @IsString()
    @IsNotEmpty()
    readonly caracteristicas: string;
   
}
