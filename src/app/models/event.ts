import { Document } from 'mongoose';
import { User } from './user';

export interface Event extends Document {
  name: String;
  description: String;
  admin: User;
  creationDate: Date;
  usersList: User[];
  category: String;
  position: {
    type: {
      latitude: Number;
      longitude: Number;
    };
  };
}
