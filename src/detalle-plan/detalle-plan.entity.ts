/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn, OneToMany , ManyToOne} from 'typeorm';
import { RutinaDiariaEntity } from '../rutina-diaria/rutina-diaria.entity';
import { PlanEntrenamientoEntity } from '../plan-entrenamiento/plan-entrenamiento.entity';

@Entity()
export class DetallePlanEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    numdia: number;

    @Column()
    marcaStreet: string;

    @ManyToOne(() => PlanEntrenamientoEntity, planEntrenamiento => planEntrenamiento.detallePlan)
    planEntrenamiento: PlanEntrenamientoEntity;

    @OneToMany(() => RutinaDiariaEntity, rutinaDiaria => rutinaDiaria.detallePlan)
    rutinaDiaria: RutinaDiariaEntity[];

    
}
