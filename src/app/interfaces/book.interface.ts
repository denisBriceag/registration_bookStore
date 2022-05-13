import { Price } from './price.interface';

export interface Book {
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: Price;
}
