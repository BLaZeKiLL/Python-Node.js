import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Client } from 'socket.io';

import { Logger } from '@nestjs/common';

import { DataService } from './data.service';
import { PythonService } from './python.service';

@WebSocketGateway({ transports: ['websocket'] })
export class AppGateway {

  private readonly logger = new Logger(AppGateway.name, true);

  @WebSocketServer()
  server: Server

  constructor(
    private readonly dataService: DataService,
  ) {
    this.dataService.Output.subscribe(
      (output) => {
        this.server.emit('output', output);
      }
    )
  }

  @SubscribeMessage('input')
  Input(@MessageBody() data: { a: number, b: number }) {
    //this.logger.log(`DATA RECIVED: ${JSON.stringify(data)}`);
    this.dataService.input(data);
  }

  handleConnection(client: Client, ..._args: any[]): void {
    this.logger.log(`CLIENT: ${client.id} CONNECTED`);
  }

  handleDisconnect(client: Client): void {
    this.logger.log(`CLIENT: ${client.id} DISCONNECTED`);
  }

}
