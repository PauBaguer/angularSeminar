import { User } from './myuser';
import { ChatMessage } from './chatMessage';
import { Document, Schema } from 'mongoose';

export interface Chat extends Document {
  name: String;
  messages: Schema.Types.ObjectId;
  users: User[];
}

export interface NewChatBody {
  name: String;
  userIds: Schema.Types.ObjectId[];
}
