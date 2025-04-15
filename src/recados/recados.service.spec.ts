import { Test, TestingModule } from '@nestjs/testing';
import { RecadosService } from './recados.service';

describe('RecadosService', () => {
  let service: RecadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecadosService],
    }).compile();

    service = module.get<RecadosService>(RecadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
