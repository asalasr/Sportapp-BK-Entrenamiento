import { Module } from '@nestjs/common';
import { AsignarDetallePlanService } from './asignar-detalle-plan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignarDetallePlanEntity } from './asignar-detalle-plan.entity';
import { AsignarDetallePlanController } from './asignar-detalle-plan.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AsignarDetallePlanEntity])],
  providers: [AsignarDetallePlanService],
  controllers: [AsignarDetallePlanController],
})
export class AsignarDetallePlanModule {}
