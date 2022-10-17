import { Test, TestingModule } from '@nestjs/testing';
import { AsignarDetallePlanService } from './asignar-detalle-plan.service';

describe('AsignarDetallePlanService', () => {
  let service: AsignarDetallePlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignarDetallePlanService],
    }).compile();

    service = module.get<AsignarDetallePlanService>(AsignarDetallePlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
