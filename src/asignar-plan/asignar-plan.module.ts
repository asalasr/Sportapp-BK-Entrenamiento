/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AsignarPlanService } from './asignar-plan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignarPlanEntity } from './asignar-plan.entity';
import { AsignarPlanController } from './asignar-plan.controller';
import { PlanEntrenamientoEntity } from '../plan-entrenamiento/plan-entrenamiento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsignarPlanEntity,PlanEntrenamientoEntity])],
  providers: [AsignarPlanService],
  controllers: [AsignarPlanController],
})
export class AsignarPlanModule {}
