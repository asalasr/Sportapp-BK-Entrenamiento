/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DetallePlanEntity } from '../detalle-plan/detalle-plan.entity';
import { AsignarPlanEntity } from '../asignar-plan/asignar-plan.entity';

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

   
    @OneToMany(() => DetallePlanEntity, detallePlan => detallePlan.planEntrenamiento)
    detallePlan: DetallePlanEntity[];

    @OneToMany(() => AsignarPlanEntity, asignarPlan => asignarPlan.planEntrenamiento)
    asignarPlan: AsignarPlanEntity[];

}
