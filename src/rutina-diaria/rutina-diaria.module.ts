import { Module } from '@nestjs/common';
import { RutinaDiariaService } from './rutina-diaria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutinaDiariaEntity } from './rutina-diaria.entity';
@Module({
  imports: [TypeOrmModule.forFeature([RutinaDiariaEntity])],
  providers: [RutinaDiariaService],
})
export class RutinaDiariaModule {}
