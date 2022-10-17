/* eslint-disable prettier/prettier */

import { Controller,UseInterceptors,Body,Delete, Get, HttpCode, Param, Post, Put ,UseGuards  } from '@nestjs/common';
import {PlanEntrenamientoService} from './plan-entrenamiento.service';
import {BusinessErrorsInterceptor} from '../shared/interceptors/business-errors.interceptor';

@Controller('plan-entrenamiento')
@UseInterceptors(BusinessErrorsInterceptor)
export class PlanEntrenamientoController {


    constructor(private readonly planEntrenamientoService: PlanEntrenamientoService) {}

    @Get()
    async findAll() {
        return await this.planEntrenamientoService.findAll();
    }

    @Get(':planEntrenamiento_id')
    async findOne(@Param('planEntrenamiento_id') planEntrenamiento_id: string) {
        return await this.planEntrenamientoService.findOne(planEntrenamiento_id);
    }

}
