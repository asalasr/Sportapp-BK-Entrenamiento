/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString, IsNumber} from 'class-validator';

export class DetallePlanDto {

    @IsNumber()
    @IsNotEmpty()
    readonly numdia: number;
    
    @IsString()
    @IsNotEmpty()
    readonly marcaStreet: string;
    

}
