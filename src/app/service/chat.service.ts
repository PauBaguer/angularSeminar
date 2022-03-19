import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  url = 'http://localhost:3000/chat';

  constructor(private http: HttpClient) {}

  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.url + '/');
  }
}
