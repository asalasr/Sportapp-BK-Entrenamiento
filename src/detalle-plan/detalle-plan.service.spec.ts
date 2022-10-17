import { Test, TestingModule } from '@nestjs/testing';
import { DetallePlanService } from './detalle-plan.service';

describe('DetallePlanService', () => {
  let service: DetallePlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallePlanService],
    }).compile();

    service = module.get<DetallePlanService>(DetallePlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
