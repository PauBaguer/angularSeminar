import { User } from './user';
import { ChatMessage } from './chatMessage';
import { Document, Schema } from 'mongoose';

export interface Chat extends Document {
  name: String;
  messages: ChatMessage[];
  users: User[];
}

export interface NewChatBody {
  name: String;
  userIds: Schema.Types.ObjectId[];
}
