/* eslint-disable prettier/prettier */

import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanEntrenamientoEntity } from '../plan-entrenamiento/plan-entrenamiento.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class PlanEntrenamientoService {

    constructor(
        @InjectRepository(PlanEntrenamientoEntity)
        private readonly planEntrenamientoRepository: Repository<PlanEntrenamientoEntity>
    ){}


    async findAll(): Promise<PlanEntrenamientoEntity[]> {
       return await this.planEntrenamientoRepository.find({ relations: ["detallePlan"] });
   }

   async findOne(id: string): Promise<PlanEntrenamientoEntity> {
        const planEntrenar: PlanEntrenamientoEntity = await this.planEntrenamientoRepository.findOne({ where: { id }, relations: ["detallePlan"] });
        if (!planEntrenar) {
            throw new BusinessLogicException("No se encontro un plan con ese id", BusinessError.NOT_FOUND);
        }
        return planEntrenar;
    }
    
}
