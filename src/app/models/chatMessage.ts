import { User } from './user.js';
import { Document } from 'mongoose';

export interface ChatMessage extends Document {
  user: User;
  message: String;
  date: Date;
}
