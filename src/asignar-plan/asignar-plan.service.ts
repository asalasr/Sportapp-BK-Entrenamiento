/* eslint-disable prettier/prettier */

import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AsignarPlanEntity } from './asignar-plan.entity';
import { AsignarDetallePlanEntity } from '../asignar-detalle-plan/asignar-detalle-plan.entity';
import { PlanEntrenamientoEntity } from '../plan-entrenamiento/plan-entrenamiento.entity';
import { DetallePlanEntity } from '../detalle-plan/detalle-plan.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class AsignarPlanService {
    
    constructor(

        @InjectRepository(AsignarPlanEntity)
        private readonly asignarPlanRepository: Repository<AsignarPlanEntity>,

        @InjectRepository(AsignarDetallePlanEntity)
        private readonly asignarDetallePlanRepository: Repository<AsignarDetallePlanEntity>,

        @InjectRepository(PlanEntrenamientoEntity)
        private readonly planEntrenamientoRepository: Repository<PlanEntrenamientoEntity>,

        @InjectRepository(DetallePlanEntity)
        private readonly detallePlanRepository: Repository<DetallePlanEntity>

    ){}

    async addDeportistaPlan(idDeportista: string, idPlanEntrenamiento: string): Promise<AsignarPlanEntity> {
       
        const plan: PlanEntrenamientoEntity = await this.planEntrenamientoRepository.findOne({where: { id:idPlanEntrenamiento }, relations: ["detallePlan"] });
        if (!plan)
            throw new BusinessLogicException("El Id de plan de entrenamiento no se encuentra", BusinessError.NOT_FOUND);
      
        const SearchAsignarplan: AsignarPlanEntity = await this.asignarPlanRepository.findOne({ where: {idDeportista:idDeportista, estado:"ACTIVO" },relations: ["planEntrenamiento"] });

        if (SearchAsignarplan) {
            if (SearchAsignarplan.estado == "ACTIVO"){
                throw new BusinessLogicException("Ya se encuentra un Plan activo para el deportista", BusinessError.PRECONDITION_FAILED);
            }
        }

        const asignarPlan= new AsignarPlanEntity;
        asignarPlan.idDeportista = idDeportista;
        asignarPlan.estado = 'ACTIVO';
        asignarPlan.fechaInicio = new Date();
        //asignarPlan.fechaFin = new Date("2100/1/1");
        asignarPlan.planEntrenamiento = plan
        await this.asignarPlanRepository.save(asignarPlan);


        const Search2Asignarplan = await this.asignarPlanRepository.findOne({ where: {idDeportista:idDeportista, estado:"ACTIVO" },relations: ["planEntrenamiento"] });

        //Se consulta de nuevo para recuperar el ID creado
        if (Search2Asignarplan) {
            if (Search2Asignarplan.estado != "ACTIVO"){
                throw new BusinessLogicException("No se asocio un Plan activo al deportista", BusinessError.PRECONDITION_FAILED);
            }
        }

        //se asignan los dias del plan
        for (const i in plan.detallePlan){
            const asignarDetallePlan= new AsignarDetallePlanEntity;
            asignarDetallePlan.idDeportista = idDeportista;
            asignarDetallePlan.numdia=plan.detallePlan[i].numdia;
            asignarDetallePlan.marcaStreet=plan.detallePlan[i].marcaStreet;
            asignarDetallePlan.estado="Sin iniciar";
            asignarDetallePlan.AsignarPlan=Search2Asignarplan;
            asignarDetallePlan.idDetallePlan=plan.detallePlan[i].id

            await this.asignarDetallePlanRepository.save(asignarDetallePlan);
        }
        return  asignarPlan;

    } 

    async findAll(): Promise<AsignarPlanEntity[]> {
        return await this.asignarPlanRepository.find({ relations: ["planEntrenamiento"] });
    }
 
    async findOne(idDeportista: string): Promise<AsignarPlanEntity> {
        const asignarPlan: AsignarPlanEntity = await this.asignarPlanRepository.findOne({ where: {idDeportista:idDeportista, estado:"ACTIVO" },relations: ["planEntrenamiento"] });
        if (!asignarPlan) {
            throw new BusinessLogicException("No se encontro un plan asignado para ese Id del deportista", BusinessError.NOT_FOUND);
        }
        return asignarPlan;
    }
} 
