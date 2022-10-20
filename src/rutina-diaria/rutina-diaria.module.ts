import { Module } from '@nestjs/common';
import { RutinaDiariaService } from './rutina-diaria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutinaDiariaEntity } from './rutina-diaria.entity';
import { RutinaDiariaController } from './rutina-diaria.controller';
@Module({
  imports: [TypeOrmModule.forFeature([RutinaDiariaEntity])],
  providers: [RutinaDiariaService],
  controllers: [RutinaDiariaController],
})
export class RutinaDiariaModule {}
