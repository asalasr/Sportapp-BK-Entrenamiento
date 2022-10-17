/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,OneToMany, ManyToOne} from 'typeorm';
import { AsignarPlanEntity } from '../asignar-plan/asignar-plan.entity';

@Entity()
export class AsignarDetallePlanEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    numdia: number;

    @Column()
    marcaStreet: string;

    @Column()
    estado: string;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaFin: Date;

    @Column()
    calorias: number;

    @Column()
    velocidadMaxima: number;

    @Column()
    distanciaRecorrida: number;

    @ManyToOne(() => AsignarPlanEntity, asignarPlan => asignarPlan.planEntrenamiento)
    AsignarPlan: AsignarPlanEntity;


}
