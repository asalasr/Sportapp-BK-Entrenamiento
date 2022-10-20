import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { faker } from '@faker-js/faker';
import { PlanEntrenamientoService } from './plan-entrenamiento.service';
import { PlanEntrenamientoEntity } from './plan-entrenamiento.entity';
import { DetallePlanEntity } from '../detalle-plan/detalle-plan.entity';

describe('PlanEntrenamientoService', () => {
  let service: PlanEntrenamientoService;
  let repository: Repository<PlanEntrenamientoEntity>;
  let repositoryList: PlanEntrenamientoEntity[];

  let detallePlanRepository : Repository<DetallePlanEntity>;
  let detallePlanList: DetallePlanEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [PlanEntrenamientoService],
    }).compile();

    service = module.get<PlanEntrenamientoService>(PlanEntrenamientoService);
    repository = module.get<Repository<PlanEntrenamientoEntity>>(getRepositoryToken(PlanEntrenamientoEntity));

    detallePlanRepository = module.get<Repository<DetallePlanEntity>>(getRepositoryToken(DetallePlanEntity),);

    await seedDatabase();
  });

  //inicializa datos para todos las pruebas
  const seedDatabase = async () => {
    repository.clear();

    detallePlanList = [];
    for (let i = 0; i < 3; i++) {
      const datos: DetallePlanEntity = await detallePlanRepository.save({
        id: 'PRUEBA' + i,
        numdia: i,
        marcaStreet: faker.lorem.word(5),
        planEntrenamiento: null,
        rutinaDiaria: null,
      });
      detallePlanList.push(datos);
    }

    repositoryList = [];
    for (let i = 0; i < 3; i++) {
      const datos: PlanEntrenamientoEntity = await repository.save({
        id: faker.lorem.word(),
        descripcion: faker.lorem.sentence(),
        nivel: faker.lorem.word(5),
        caracteristicas: faker.lorem.sentence(),
        detallePlan: detallePlanList,
        asignarPlan: null
      })
      repositoryList.push(datos);
    }
  };

  it('findOne retorna un plan  por id', async () => {
    const storedDatos: PlanEntrenamientoEntity = repositoryList[0];
    const dato: PlanEntrenamientoEntity = await service.findOne(storedDatos.id);
    expect(dato).not.toBeNull();
    expect(dato.caracteristicas).toEqual(storedDatos.caracteristicas);
    expect(dato.descripcion).toEqual(storedDatos.descripcion);
    expect(dato.nivel).toEqual(storedDatos.nivel);
  });

  it('findAll devuelve planes', async () => {
    const datos: PlanEntrenamientoEntity[] = await service.findAll();
    expect(datos).not.toBeNull();
    expect(datos).toHaveLength(repositoryList.length);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
