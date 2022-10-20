import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { faker } from '@faker-js/faker';
import { AsignarPlanEntity } from './asignar-plan.entity';
import { AsignarPlanService } from './asignar-plan.service';

describe('AsignarPlanService', () => {
  let service: AsignarPlanService;
  let repository: Repository<AsignarPlanEntity>;
  let repositoryList: AsignarPlanEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [AsignarPlanService],
    }).compile();

    service = module.get<AsignarPlanService>(AsignarPlanService);

    repository = module.get<Repository<AsignarPlanEntity>>(getRepositoryToken(AsignarPlanEntity));

    await seedDatabase();

  });

  //inicializa datos para todos las pruebas
  const seedDatabase = async () => {
    repository.clear();
    repositoryList = [];
    for (let i = 0; i < 3; i++) {
      const datos: AsignarPlanEntity = await repository.save({
        id: faker.lorem.word(),
        idDeportista: faker.phone.imei(),
        fechaInicio: faker.date.recent(),
        fechaFin: faker.date.recent(),
        estado: "ACTIVO"
      })
      repositoryList.push(datos);
    }
  }


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
