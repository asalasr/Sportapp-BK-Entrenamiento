/* eslint-disable prettier/prettier */

import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AsignarPlanEntity } from './asignar-plan.entity';
import { PlanEntrenamientoEntity } from '../plan-entrenamiento/plan-entrenamiento.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class AsignarPlanService {
    
    constructor(

        @InjectRepository(AsignarPlanEntity)
        private readonly asignarPlanRepository: Repository<AsignarPlanEntity>,

        @InjectRepository(PlanEntrenamientoEntity)
        private readonly planEntrenamientoRepository: Repository<PlanEntrenamientoEntity>

    ){}

    /*async create(asignarPlan: AsignarPlanEntity): Promise<AsignarPlanEntity> {

        return await this.AsignarPlanRepository.save(asignarPlan);
    }*/

    async addDeportistaPlan(idDeportista: string, idPlanEntrenamiento: string): Promise<AsignarPlanEntity> {
        const plan: PlanEntrenamientoEntity = await this.planEntrenamientoRepository.findOne({where: {id: idPlanEntrenamiento}});
        if (!plan)
          throw new BusinessLogicException("El Id de plan de entrenamiento no se encuentra", BusinessError.NOT_FOUND);
       
        const asignarPlan= new AsignarPlanEntity;
        
        asignarPlan.idDeportista = idDeportista;
        asignarPlan.estado = 'ACTIVO';
        asignarPlan.fechaInicio = new Date();
        //asignarPlan.fechaFin = new Date("2100/1/1");
        asignarPlan.planEntrenamiento = plan;
        return await this.asignarPlanRepository.save(asignarPlan);
    }

    async findAll(): Promise<AsignarPlanEntity[]> {
        return await this.asignarPlanRepository.find({ relations: ["planEntrenamiento"] });
    }
 
    async findOne(idDeportista: string): Promise<AsignarPlanEntity> {
        const asignarPlan: AsignarPlanEntity = await this.asignarPlanRepository.findOne({ where: {idDeportista:idDeportista }, relations: ["planEntrenamiento"] });
        if (!asignarPlan) {
            throw new BusinessLogicException("No se encontro un plan asignado para ese Id del deportista", BusinessError.NOT_FOUND);
        }
        return asignarPlan;
    }
} 
