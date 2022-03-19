import { User } from './user';
import { ChatMessage } from './chatMessage';
import { Document } from 'mongoose';

export interface Chat extends Document {
  name: String;
  messages: ChatMessage[];
  users: User[];
}
