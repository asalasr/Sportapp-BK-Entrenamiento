/* eslint-disable prettier/prettier */

import { Controller,UseInterceptors, Get, Param, Post } from '@nestjs/common';
import {AsignarPlanService} from './asignar-plan.service';
import {BusinessErrorsInterceptor} from '../shared/interceptors/business-errors.interceptor';

@Controller('asignar-plan')
@UseInterceptors(BusinessErrorsInterceptor)
export class AsignarPlanController {

    constructor(private readonly asignarPlanService: AsignarPlanService) {}

    @Get()
    async findAll() {
        return await this.asignarPlanService.findAll();
    }

    @Get(':deportistaId')
    async findOne(@Param('deportistaId') deportistaId: string) {
        return await this.asignarPlanService.findOne(deportistaId);
    }

    @Post(':planId/diaplan/:diaPlanId/deportista/:deportistaId')
    async addDeportistaPlan(@Param('deportistaId') deportistaId: string, @Param('planId') planId: string, @Param('diaPlanId') diaPlanId: string){
        return await this.asignarPlanService.addDeportistaPlan(deportistaId, planId,diaPlanId);
    }

}
