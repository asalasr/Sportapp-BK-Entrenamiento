/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AsignarPlanService } from './asignar-plan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignarPlanEntity } from './asignar-plan.entity';
import { AsignarPlanController } from './asignar-plan.controller';
import { PlanEntrenamientoEntity } from '../plan-entrenamiento/plan-entrenamiento.entity';
import { DetallePlanEntity } from '../detalle-plan/detalle-plan.entity';
import { AsignarDetallePlanEntity } from '../asignar-detalle-plan/asignar-detalle-plan.entity';
@Module({
  imports: [TypeOrmModule.forFeature([AsignarPlanEntity,PlanEntrenamientoEntity,DetallePlanEntity,AsignarDetallePlanEntity])],
  providers: [AsignarPlanService],
  controllers: [AsignarPlanController],
})
export class AsignarPlanModule {}
