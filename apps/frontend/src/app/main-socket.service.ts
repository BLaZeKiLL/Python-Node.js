import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MainSocketService extends Socket {

  private connectEvent: Observable<any>;
  private errorEvent: Observable<any>;
  private disconnecttEvent: Observable<any>;

  constructor() {
    super({
      url: 'ws://localhost:3333',
      options: { transports: ['websocket'] }
    });

    this.connectEvent = this.fromEvent('connect').pipe(
      tap(message => { console.log(`[MAIN-SOCKET][CONNECT]: ${message}`); })
    );
    this.errorEvent = this.fromEvent('error').pipe(
      tap(message => { console.log(`[MAIN-SOCKET][ERROR]: ${message}`); })
    );
    this.disconnecttEvent = this.fromEvent('disconnect').pipe(
      tap(message => { console.log(`[MAIN-SOCKET][DISCONNECT]: ${message}`); })
    );

  }

  public get ConnectEvent(): Observable<any> {
    return this.connectEvent;
  }

  public get ErrorEvent(): Observable<any> {
    return this.errorEvent;
  }

  public get DisconnectEvent(): Observable<any> {
    return this.disconnecttEvent;
  }

}
