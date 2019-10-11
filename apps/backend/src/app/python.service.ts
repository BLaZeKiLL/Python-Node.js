import { Injectable, Logger } from '@nestjs/common';
import { PythonShell } from 'python-shell';
import { config } from './python.config';
import { Observable, fromEvent } from 'rxjs';

@Injectable()
export class PythonService {

  private readonly logger = new Logger(PythonService.name, true);
  private shell: PythonShell;

  constructor() {
    this.shell = new PythonShell('test.py', config);
    this.startup();
  }

  private startup() {
    this.logger.log('PYTHON STARTUP');
    //this.process({ a:2, b:3 });
  }

  public get Response(): Observable<any> {
    return fromEvent(this.shell, 'message');
  }

  public process(data: any) {
    this.shell.send(data);
  }

}
