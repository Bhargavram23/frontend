import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{
  products:Array<Product>;
  constructor(public productService:ProductService){}
  ngOnInit(): void {
    this.products= this.productService.getAllProducts();
  }
}