import { Test } from '@nestjs/testing';

import { DataService } from './data.service';

describe('AppService', () => {
  let service: DataService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [DataService],
    }).compile();

    service = app.get<DataService>(DataService);
  });

  describe('getData', () => {
    it('should return "Welcome to backend!"', () => {
      expect(service.getData()).toEqual({message: 'Welcome to backend!'});
    });
  });
});
