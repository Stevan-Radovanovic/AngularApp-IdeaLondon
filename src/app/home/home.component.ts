import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private serv: ProductService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.serv.getProducts();
  }
}
