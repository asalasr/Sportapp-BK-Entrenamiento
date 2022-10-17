/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne} from 'typeorm';
import { PlanEntrenamientoEntity } from '../plan-entrenamiento/plan-entrenamiento.entity';

@Entity()
export class AsignarPlanEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    idDeportista: string;

    @Column({ nullable: true })
    fechaInicio: Date;

    @Column({ nullable: true })
    fechaFin: Date;

    @Column()
    estado: string;

    @ManyToOne(() => PlanEntrenamientoEntity, planEntrenamiento => planEntrenamiento.detallePlan)
    planEntrenamiento: PlanEntrenamientoEntity;

   /* @OneToMany(() => AsignarDetallePlanEntity, detallePlan => detallePlan.AsignarPlan)
    DetallePlan: AsignarDetallePlanEntity[];*/

}
