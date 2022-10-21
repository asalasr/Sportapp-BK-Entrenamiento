/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlanEntrenamientoEntity } from '../../plan-entrenamiento/plan-entrenamiento.entity';
import { DetallePlanEntity } from '../../detalle-plan/detalle-plan.entity';
import { AsignarDetallePlanEntity } from '../../asignar-detalle-plan/asignar-detalle-plan.entity';
import { AsignarPlanEntity } from '../../asignar-plan/asignar-plan.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [PlanEntrenamientoEntity, DetallePlanEntity, AsignarDetallePlanEntity, AsignarPlanEntity],
    synchronize: true,
    keepConnectionAlive: true
  }),
  TypeOrmModule.forFeature([PlanEntrenamientoEntity, DetallePlanEntity, AsignarDetallePlanEntity, AsignarPlanEntity]),
];