import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CometChat } from '@cometchat-pro/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  theme: string = '';

  constructor() {}

  ngOnInit(): void {
    CometChat.getLoggedinUser()
      .then((user: any) => this.theme = `background-color: ${user.metadata.theme};`)
      .catch((error) => console.log('error getting details:', { error }));
  }
}
