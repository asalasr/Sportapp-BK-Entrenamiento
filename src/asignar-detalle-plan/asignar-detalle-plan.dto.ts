/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString, IsOptional,IsNumber} from 'class-validator';

export class AsignarDetallePlanDto {

    @IsString()
    @IsNotEmpty()
    readonly idDeportista: string;

    @IsString()
    @IsOptional()
    readonly idDetallePlan: string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly numdia: number;

    @IsString()
    @IsNotEmpty()
    readonly marcaStreet: string;

    @IsString()
    @IsNotEmpty()
    readonly estado: string;

    @IsString()
    @IsOptional()
    readonly fechaInicio: string;

    @IsString()
    @IsOptional()
    readonly fechaFin: string;

    @IsNumber()
    @IsOptional()
    readonly calorias: number;

    @IsNumber()
    @IsOptional()
    readonly velocidadMaxima: number;

    @IsNumber()
    @IsOptional()
    readonly distanciaRecorrida: number;



}
