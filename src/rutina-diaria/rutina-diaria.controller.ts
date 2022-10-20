/* eslint-disable prettier/prettier */

import { Controller,UseInterceptors,Body,Delete, Get, HttpCode, Param, Post, Put ,UseGuards  } from '@nestjs/common';
import {RutinaDiariaService} from './rutina-diaria.service';
import {BusinessErrorsInterceptor} from '../shared/interceptors/business-errors.interceptor';


@Controller('rutina-diaria')
export class RutinaDiariaController {

    constructor(private readonly rutinaDiariaService: RutinaDiariaService) {}

    @Get()
    async findAll() {
        return await this.rutinaDiariaService.findAll();
    }

    @Get(':rutinadiaria_id')
    async findOne(@Param('rutinadiaria_id') rutinadiaria_id: string) {
        return await this.rutinaDiariaService.findOne(rutinadiaria_id);
    }

}
