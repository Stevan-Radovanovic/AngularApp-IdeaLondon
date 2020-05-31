import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products: Product[] = [
    {
      title: 'card.title1',
      subtitle: 'card.subtitle1',
      content: 'card.content1',
    },
    {
      title: 'card.title2',
      subtitle: 'card.subtitle2',
      content: 'card.content2',
    },
    {
      title: 'card.title3',
      subtitle: 'card.subtitle3',
      content: 'card.content3',
    },
  ];

  getProducts() {
    return [...this.products];
  }
}
