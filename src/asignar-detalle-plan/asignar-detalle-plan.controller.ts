/* eslint-disable prettier/prettier */

import { Controller,UseInterceptors, Get, Param, Post } from '@nestjs/common';
import {AsignarDetallePlanService} from './asignar-detalle-plan.service';
import {BusinessErrorsInterceptor} from '../shared/interceptors/business-errors.interceptor';

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

}
