import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  listChats: Chat[] = [];

  constructor(private _chatService: ChatService) {}

  ngOnInit(): void {
    this.getChats();
  }

  getChats() {
    this._chatService.getChats().subscribe(
      (data) => {
        console.log({ Chats: data });
        this.listChats = data;
      },
      (error) => console.log(error)
    );
  }

  parseMembers(chat: Chat): String {
    const user_names = chat.users.map((el: User) => el.name);
    return user_names.join(', ');
  }
}
