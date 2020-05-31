import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private serv: ProductService,
    private bottomSheet: MatBottomSheet
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.serv.getProducts();
  }

  openBottomSheet() {
    this.bottomSheet.open(BottomSheetComponent);
  }
}
