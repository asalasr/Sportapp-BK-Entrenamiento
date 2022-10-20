/* eslint-disable prettier/prettier */

import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RutinaDiariaEntity } from '../rutina-diaria/rutina-diaria.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';


@Injectable()
export class RutinaDiariaService {

    constructor(
        @InjectRepository(RutinaDiariaEntity)
        private readonly rutinaDiariaRepository: Repository<RutinaDiariaEntity>
    ){}


    async findAll(): Promise<RutinaDiariaEntity[]> {
       return await this.rutinaDiariaRepository.find({ relations: ["detallePlan"] });
   }

   async findOne(id: string): Promise<RutinaDiariaEntity> {
        const planEntrenar: RutinaDiariaEntity = await this.rutinaDiariaRepository.findOne({ where: { id }, relations: ["detallePlan"] });
        if (!planEntrenar) {
            throw new BusinessLogicException("No se encontro un plan con ese id", BusinessError.NOT_FOUND);
        }
        return planEntrenar;
    }


}
