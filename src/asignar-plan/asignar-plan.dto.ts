/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString, IsOptional} from 'class-validator';

export class AsignarPlanDto {

    @IsString()
    @IsNotEmpty()
    readonly idDeportista: string;



    @IsString()
    @IsOptional()
    readonly fechaInicio: string;

    @IsString()
    @IsOptional()
    readonly fechaFin: string;

    @IsString()
    @IsNotEmpty()
    readonly estado: string;


}
