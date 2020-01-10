import { CartService } from './../../../cart/services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from 'src/app/cart/models/cart-item';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;


  constructor(private productService: ProductService,
             private cartService: CartService) {

              }

  ngOnInit() {
    this.products$ = this.productService
        .getProducts();
         
  }

  addToCart(product: Product) {
    const item: CartItem = new CartItem();
    item.id = product.id;
    item.name = product.name;
    item.price = product.price;
    item.qty = 1;

    this.cartService.addItem(item);
  }
 
}
