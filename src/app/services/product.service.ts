import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts():Array<Product>{
   let products = new Array<Product>();
    products.push(new Product(1,"shirt","Nike T shirt","branded shirts",20,"url",true,3,new Date(), new Date()));
    products.push(new Product(2,"shirt","Nike T2 shirt","branded shirts 2",22,"url",true,3,new Date(), new Date()));
    products.push(new Product(3,"shirt","Nike T3 shirt","branded shirts 3",23,"url",true,3,new Date(), new Date()));
    products.push(new Product(4,"shirt","Nike T4 shirt","branded shirts 4",24,"url",true,3,new Date(), new Date()));
    return products;
  }

}
