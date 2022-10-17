/* eslint-disable prettier/prettier */

import { Controller,UseInterceptors,Body,Delete, Get, HttpCode, Param, Post, Put ,UseGuards  } from '@nestjs/common';
import {AsignarPlanService} from './asignar-plan.service';
import {BusinessErrorsInterceptor} from '../shared/interceptors/business-errors.interceptor';
import { plainToInstance } from 'class-transformer';
import {AsignarPlanDto} from '../asignar-plan/asignar-plan.dto';
import {AsignarPlanEntity} from '../asignar-plan/asignar-plan.entity';

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

    @Post(':planId/deportista/:deportistaId')
    async addDeportistaPlan(@Param('deportistaId') deportistaId: string, @Param('planId') planId: string){
        return await this.asignarPlanService.addDeportistaPlan(deportistaId, planId);
    }

}
