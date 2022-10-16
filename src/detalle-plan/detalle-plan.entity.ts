/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

export class DetallePlanEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    numdia: number;
    
    @Column()
    actividad: string;

    @Column()
    descripcion: string;

    @Column()
    marcastreet: string;

    @Column()
    tiempo: string;


}
