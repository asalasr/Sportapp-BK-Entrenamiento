/* eslint-disable prettier/prettier */
import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DetallePlanEntity } from '../detalle-plan/detalle-plan.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class DetallePlanService {

    constructor(
        @InjectRepository(DetallePlanEntity)
        private readonly detallePlanRepository: Repository<DetallePlanEntity>
    ){}


    async findAll(): Promise<DetallePlanEntity[]> {
        return await this.detallePlanRepository.find({ relations: ["rutinaDiaria","planEntrenamiento"] });
    }

    async findOne(id: string): Promise<DetallePlanEntity> {
        const detallePlan: DetallePlanEntity = await this.detallePlanRepository.findOne({ where: { id }, relations: ["rutinaDiaria","planEntrenamiento"] });
        if (!detallePlan) {
            throw new BusinessLogicException("No se encontro un detalle de plan con ese id", BusinessError.NOT_FOUND);
        }
        return detallePlan;
    }

}
