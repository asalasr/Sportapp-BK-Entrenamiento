import { Module } from '@nestjs/common';
import { DetallePlanService } from './detalle-plan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePlanEntity } from './detalle-plan.entity';
import { DetallePlanController } from './detalle-plan.controller';
@Module({
  imports: [TypeOrmModule.forFeature([DetallePlanEntity])],
  providers: [DetallePlanService],
  controllers: [DetallePlanController],
})
export class DetallePlanModule {}
