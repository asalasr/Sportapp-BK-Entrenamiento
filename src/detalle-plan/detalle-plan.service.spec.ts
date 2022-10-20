import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { faker } from '@faker-js/faker';
import { DetallePlanService } from './detalle-plan.service';
import { DetallePlanEntity } from './detalle-plan.entity';
import { RutinaDiariaEntity } from '../rutina-diaria/rutina-diaria.entity';

describe('DetallePlanService', () => {
  let service: DetallePlanService;
  let repository: Repository<DetallePlanEntity>;
  let repositoryList: DetallePlanEntity[];

  let rutinaRepository : Repository<RutinaDiariaEntity>;
  let rutinaList: DetallePlanEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [DetallePlanService],
    }).compile();

    service = module.get<DetallePlanService>(DetallePlanService);
    repository = module.get<Repository<DetallePlanEntity>>(getRepositoryToken(DetallePlanEntity));

    rutinaRepository = module.get<Repository<RutinaDiariaEntity>>(getRepositoryToken(RutinaDiariaEntity));

    await seedDatabase();
  });

  //inicializa datos para todos las pruebas
  const seedDatabase = async () => {
    repository.clear();

    rutinaList = [];
    for (let i = 0; i < 3; i++) {
      const rutina: RutinaDiariaEntity = await rutinaRepository.save({
        id: 'PRUEBA' + i,
        actividad: i,
        descripcion: faker.lorem.sentence(),
        tiempo: faker.lorem.lines(),
        detallePlan:null
      })
      rutinaList.push(rutina);
    }

    repositoryList = [];
    for (let i = 0; i < 3; i++) {
      const datos: DetallePlanEntity = await repository.save({
        id: 'PRUEBA' +i,
        numdia: i,
        marcaStreet: faker.lorem.word(5),
        planEntrenamiento: null,
        rutinaDiaria: rutinaList
      })
      repositoryList.push(datos);
    }
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
