import { Test, TestingModule } from '@nestjs/testing';
import { AsignarPlanService } from './asignar-plan.service';

describe('AsignarPlanService', () => {
  let service: AsignarPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignarPlanService],
    }).compile();

    service = module.get<AsignarPlanService>(AsignarPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
