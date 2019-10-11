import { Component } from '@angular/core';
import { MainSocketService } from './main-socket.service';

@Component({
  selector: 'pnode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  a: number;
  b: number;
  ans: number;

  private handel;

  constructor(
    private readonly socket: MainSocketService
  ) {
    this.socket.on('output', (data) => this.ans = data.ans);
  }

  start(): void {
    this.handel = setInterval(
      () => {
        this.a = Math.random() * 100;
        this.b = Math.random() * 100;
        this.socket.emit('input', { a: this.a, b: this.b })
      },
      1000
    );
  }

  stop(): void {
    clearInterval(this.handel);
  }

}
