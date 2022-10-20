/* eslint-disable prettier/prettier */
import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AsignarDetallePlanEntity } from '../asignar-detalle-plan/asignar-detalle-plan.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class AsignarDetallePlanService {

    constructor(
        @InjectRepository(AsignarDetallePlanEntity)
        private readonly asignarDetallePlanRepository: Repository<AsignarDetallePlanEntity>
    ){}

    async findAll(): Promise<AsignarDetallePlanEntity[]> {
        return await this.asignarDetallePlanRepository.find({ relations: ["AsignarPlan"] });
    }
 
    async findOne(id: string): Promise<AsignarDetallePlanEntity> {
        const asignarDetallePlan: AsignarDetallePlanEntity = await this.asignarDetallePlanRepository.findOne({ where: {id}, relations: ["AsignarPlan"] });
        if (!asignarDetallePlan) {
            throw new BusinessLogicException("No se encontro un detalle de plan asignado para ese Id", BusinessError.NOT_FOUND);
        }
        return asignarDetallePlan;
    }

    async findOneByDeportistaiD(deportistaId: string): Promise<AsignarDetallePlanEntity[]> {
        const asignarDetallePlan: AsignarDetallePlanEntity[] = await this.asignarDetallePlanRepository.find({ where: {idDeportista:deportistaId}, relations: ["AsignarPlan"] });
        if (!asignarDetallePlan) {
            throw new BusinessLogicException("No se encontro un deportista asociado con el detalle de plan", BusinessError.NOT_FOUND);
        }
        return asignarDetallePlan;
    }

}
