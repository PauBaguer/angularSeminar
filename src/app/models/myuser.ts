import { Document } from 'mongoose';
import { Book } from './book.js';
import { Event } from './event';
import { Club } from './club.js';
import { Chat } from './chat.js';
//import { Category } from "./category";
//import { Payment } from "./payment";

export interface User extends Document {
  name: String;
  userName: String;
  age: Number;
  mail: String;
  password: String;
  location: { latidude: Number; longitude: Number };
  money: Number;
  books: Book[];
  events: Event[];
  clubs: Club[];
  chats: Chat[];
  createdAt: Date;
  updatedAt: Date;
  disabled: Boolean;
  //  categories: Category[];
  //  payments: Payment[];
}
