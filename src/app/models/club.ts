import { Document } from 'mongoose';
import { User } from './user';

export interface Club extends Document {
  name: string;
  description: string;
  admin: User;
  users: User[];
  createdAt: Number;
  category: string; //TODO-JA: change category for an object
}
