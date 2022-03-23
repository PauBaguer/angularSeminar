import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Schema } from 'mongoose';
import { ToastrService } from 'ngx-toastr';

import { Chat, NewChatBody } from 'src/app/models/chat';
import { User } from 'src/app/models/myuser';
import { ChatService } from 'src/app/service/chat.service';
import { MyuserService } from 'src/app/service/myuser.service';

@Component({
  selector: 'app-chat-create',
  templateUrl: './chat-create.component.html',
  styleUrls: ['./chat-create.component.css'],
})
export class ChatCreateComponent implements OnInit {
  chatForm: FormGroup;
  title = 'Crear Chat';
  name: string | null;
  users: User[] = [];
  checkedUsers: User[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _chatService: ChatService,
    private _userService: MyuserService,
    private aRouter: ActivatedRoute
  ) {
    this.chatForm = this.fb.group({
      name: ['', Validators.required],
    });

    this.name = this.aRouter.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(
      (userlist) => {
        console.log(userlist);
        this.users = userlist;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.toastr.error(
          `Error ${error.status}, ${error.statusText}`,
          'Http error'
        );
      }
    );
  }

  addChat() {
    //Add User
    const chat: NewChatBody = {
      name: this.chatForm.get('name')?.value,
      userIds: this.checkedUsers.map<Schema.Types.ObjectId>((item) => item._id),
    };
    console.log(chat);
    this._chatService.newChat(chat).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success('El chat ha estat creat amb exit!', 'Chat Creat');
        this.router.navigate(['/chat-list']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.toastr.error(
          `Error ${error.status}, ${error.statusText}`,
          'Http error'
        );
      }
    );
  }

  checkBoxChange(event: any, user: User) {
    console.log(event);
    console.log(user);
    if (event.target.checked) {
      if (this.checkedUsers.includes(user)) return;

      this.checkedUsers.push(user);
    } else {
      if (!this.checkedUsers.includes(user)) return;

      const index = this.checkedUsers.indexOf(user);
      if (index > -1) this.checkedUsers.splice(index, 1);
    }
    console.log(this.checkedUsers);
  }
}
