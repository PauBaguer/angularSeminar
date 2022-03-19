import { Document } from 'mongoose';
//import {Editorial} from "./editorial.js"

export interface Book extends Document {
  title: String;
  category: String;
  ISBN: String;
  releaseDate: Date;
  publicationDate: Date;
  //  editorial: Editorial
  format: String;
  quantity: Number;
  sells: Number;
  description: String;
}
