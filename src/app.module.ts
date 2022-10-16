import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { JoiValidationSchema } from './config/joi.validation';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanEntrenamientoModule } from './plan-entrenamiento/plan-entrenamiento.module';
import { DetallePlanModule } from './detalle-plan/detalle-plan.module';
import { AsignarPlanModule } from './asignar-plan/asignar-plan.module';
import { AsignarDetallePlanModule } from './asignar-detalle-plan/asignar-detalle-plan.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: JoiValidationSchema, //puede ser este sola o los dos
    }),
    TypeOrmModule.forRoot({
      ssl: process.env.NODE_ENV === 'prod',
      extra: {
        ssl:
          process.env.STAGE === 'prod' ? { rejectUnauthorized: false } : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true, //falso en produccion
    }),
    CommonModule,
    PlanEntrenamientoModule,
    DetallePlanModule,
    AsignarPlanModule,
    AsignarDetallePlanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
