/* eslint-disable prettier/prettier */
/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { faker } from '@faker-js/faker';
import { RutinaDiariaService } from './rutina-diaria.service';
import { RutinaDiariaEntity } from './rutina-diaria.entity';

describe('RutinaDiariaService', () => {
  let service: RutinaDiariaService;
  let repository: Repository<RutinaDiariaEntity>;
  let repositoryList: RutinaDiariaEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [RutinaDiariaService],
    }).compile();

    service = module.get<RutinaDiariaService>(RutinaDiariaService);
    repository = module.get<Repository<RutinaDiariaEntity>>(getRepositoryToken(RutinaDiariaEntity));
    await seedDatabase();
  });

  //inicializa datos para todos las pruebas
  const seedDatabase = async () => {
    repository.clear();
    repositoryList = [];
    for (let i = 0; i < 3; i++) {
      const datos: RutinaDiariaEntity = await repository.save({
        id: "PRUEBA" + i,
        actividad: i,
        descripcion: faker.lorem.sentence(),
        tiempo: faker.lorem.lines(),
        detallePlan:null
      })
      repositoryList.push(datos);
    }
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne retorna una rutina diaria por id', async () => {
    const storedDatos: RutinaDiariaEntity = repositoryList[0];
    const dato: RutinaDiariaEntity = await service.findOne(storedDatos.id);
    expect(dato).not.toBeNull();
    expect(dato.actividad).toEqual(storedDatos.actividad);
    expect(dato.descripcion).toEqual(storedDatos.descripcion);
    expect(dato.tiempo).toEqual(storedDatos.tiempo);
  });

  it('findAll devuelve rutinas', async () => {
    const datos: RutinaDiariaEntity[] = await service.findAll();
    expect(datos).not.toBeNull();
    expect(datos).toHaveLength(repositoryList.length);
  });
});
