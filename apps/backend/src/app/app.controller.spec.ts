import { Test, TestingModule } from '@nestjs/testing';

import { AppGateway } from './app.gateway';
import { DataService } from './data.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppGateway],
      providers: [DataService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to backend!"', () => {
      const appController = app.get<AppGateway>(AppGateway);
      expect(appController.getData()).toEqual({message: 'Welcome to backend!'});
    });
  });
});
