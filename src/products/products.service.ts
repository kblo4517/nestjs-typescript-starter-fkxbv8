import { Injectable} from '@nestjs/common';
import {Product} from './product.model'

@Injectable()
export class ProductsService{
    products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
      const newProduct = new Product(new Date().toString(), title, desc, price);
      const prodID = new Date().toString();
      this.products.push(newProduct);
      return prodID;
    }
}