/* eslint-disable prettier/prettier */

import { Controller,UseInterceptors, Get, Param, Put ,Body} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {AsignarDetallePlanService} from './asignar-detalle-plan.service';
import {BusinessErrorsInterceptor} from '../shared/interceptors/business-errors.interceptor';
import { AsignarDetallePlanEntity } from '../asignar-detalle-plan/asignar-detalle-plan.entity';
import {AsignarDetallePlanDto} from '../asignar-detalle-plan/asignar-detalle-plan.dto';

@Controller('asignar-detalle-plan')
@UseInterceptors(BusinessErrorsInterceptor)
export class AsignarDetallePlanController {

    constructor(private readonly asignarDetallePlanService: AsignarDetallePlanService) {}

    @Get()
    async findAll() {
        return await this.asignarDetallePlanService.findAll();
    }

   /* @Get(':planId')
    async findOne(@Param('planId') planId: string) {
        return await this.asignarDetallePlanService.findOne(planId);
    }*/

    @Get(':deportistaId')
    async findOneByDeportistaiD(@Param('deportistaId') deportistaId: string) {
        return await this.asignarDetallePlanService.findOneByDeportistaiD(deportistaId);
    }

    @Put(':detalleplan_id')
    async update(@Param('detalleplan_id') detalleplan_id: string, @Body() asignarDetallePlanDto: AsignarDetallePlanDto) {
        const detallePlan: AsignarDetallePlanEntity = plainToInstance(AsignarDetallePlanEntity, asignarDetallePlanDto);
        return await this.asignarDetallePlanService.updateDetallePlan(detalleplan_id, detallePlan);
    }


}
