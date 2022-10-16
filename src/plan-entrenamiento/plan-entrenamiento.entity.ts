/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DetallePlanEntity } from '../detalle-plan/detalle-plan.entity';

@Entity()
export class PlanEntrenamientoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    descripcion: string;
    
    @Column()
    nivel: string;

    @Column()
    caracteristicas: string;

   
    @OneToMany(() => DetallePlanEntity, detallePlan => detallePlan.PlanEntrenamiento)
    detallePlanEntity: DetallePlanEntity[];

}
