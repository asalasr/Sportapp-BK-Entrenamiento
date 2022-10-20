/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne,OneToOne,JoinColumn} from 'typeorm';
import { AsignarPlanEntity } from '../asignar-plan/asignar-plan.entity';
import { DetallePlanEntity } from '../detalle-plan/detalle-plan.entity';

@Entity()
export class AsignarDetallePlanEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    idDeportista: string;

    @Column()
    idDetallePlan: string;


    @Column()
    numdia: number;

    @Column()
    marcaStreet: string;

    @Column()
    estado: string;

    @Column({ nullable: true })
    fechaInicio: Date;

    @Column({ nullable: true })
    fechaFin: Date;

    @Column({ nullable: true })
    calorias: number;

    @Column({ nullable: true })
    velocidadMaxima: number;

    @Column({ nullable: true })
    distanciaRecorrida: number;

    @ManyToOne(() => AsignarPlanEntity, asignarPlan => asignarPlan.asignarDetallePlan)
    AsignarPlan: AsignarPlanEntity;

}