import { Module } from '@nestjs/common';
import { AsignarDetallePlanService } from './asignar-detalle-plan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignarDetallePlanEntity } from './asignar-detalle-plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsignarDetallePlanEntity])],
  providers: [AsignarDetallePlanService],
})
export class AsignarDetallePlanModule {}
