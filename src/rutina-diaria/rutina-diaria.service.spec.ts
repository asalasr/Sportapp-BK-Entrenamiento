import { Test, TestingModule } from '@nestjs/testing';
import { RutinaDiariaService } from './rutina-diaria.service';

describe('RutinaDiariaService', () => {
  let service: RutinaDiariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RutinaDiariaService],
    }).compile();

    service = module.get<RutinaDiariaService>(RutinaDiariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
