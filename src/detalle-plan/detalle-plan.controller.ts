/* eslint-disable prettier/prettier */

import { Controller,UseInterceptors,Body,Delete, Get, HttpCode, Param, Post, Put ,UseGuards  } from '@nestjs/common';
import {DetallePlanService} from './detalle-plan.service';
import {BusinessErrorsInterceptor} from '../shared/interceptors/business-errors.interceptor';

@Controller('detalle-plan')
@UseInterceptors(BusinessErrorsInterceptor)
export class DetallePlanController {

    constructor(private readonly detallePlanService: DetallePlanService) {}

    @Get()
    async findAll() {
        return await this.detallePlanService.findAll();
    }

    @Get(':detallePlan_id')
    async findOne(@Param('detallePlan_id') detallePlan_id: string) {
        return await this.detallePlanService.findOne(detallePlan_id);
    }
}
