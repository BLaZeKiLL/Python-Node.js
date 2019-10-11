import { Module } from '@nestjs/common';

import { AppGateway } from './app.gateway';
import { DataService } from './data.service';
import { PythonService } from './python.service';

@Module({
  providers: [DataService, AppGateway, PythonService],
})
export class AppModule {}
