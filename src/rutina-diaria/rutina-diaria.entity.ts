/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DetallePlanEntity } from '../detalle-plan/detalle-plan.entity';

@Entity()
export class RutinaDiariaEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    actividad: number;

    @Column()
    descripcion: string;
    
    @Column()
    tiempo: string;

    @ManyToOne(() => DetallePlanEntity, detallePlan => detallePlan.rutinaDiaria)
    detallePlan: DetallePlanEntity;

}
