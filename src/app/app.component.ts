import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'weather-app-frontend';
  private socket: any;
  public container: any;

  constructor() {
    // @ts-ignore
    this.socket = io('http://localhost:49160');
  }

  public sendLoc(str: any) {
    this.socket.emit('Public', str);
  }

  ngOnInit(): void {

    this.socket.on('weather', (data: any) => {
      console.log('Received message from Websocket Server', data);
      this.container = data;
    });
  }

}


