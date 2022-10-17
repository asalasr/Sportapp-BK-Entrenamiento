import { Module } from '@nestjs/common';
import { PlanEntrenamientoService } from '../plan-entrenamiento/plan-entrenamiento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanEntrenamientoEntity } from '../plan-entrenamiento/plan-entrenamiento.entity';
import { PlanEntrenamientoController } from '../plan-entrenamiento/plan-entrenamiento.controller';

@Module({
  providers: [PlanEntrenamientoService],
  imports: [TypeOrmModule.forFeature([PlanEntrenamientoEntity])],
  controllers: [PlanEntrenamientoController],
})
export class PlanEntrenamientoModule {}
