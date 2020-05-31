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
    {
      title: 'card.title4',
      subtitle: 'card.subtitle4',
      content: 'card.content4',
    },
    {
      title: 'card.title5',
      subtitle: 'card.subtitle5',
      content: 'card.content5',
    },
    {
      title: 'card.title6',
      subtitle: 'card.subtitle6',
      content: 'card.content6',
    },
    {
      title: 'card.title7',
      subtitle: 'card.subtitle7',
      content: 'card.content7',
    },
    {
      title: 'card.title8',
      subtitle: 'card.subtitle8',
      content: 'card.content8',
    },
  ];

  getProducts() {
    return [...this.products];
  }
}
