import { CartService } from './../../../cart/services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from 'src/app/cart/models/cart-item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[];

  subscription: Subscription;

  constructor(private productService: ProductService,
             private cartService: CartService) {

              }

  ngOnInit() {
    this.subscription = this.productService
        .getProducts()
        .subscribe( products => {
          this.products = products;
        });
  }

  addToCart(product: Product) {
    const item: CartItem = new CartItem();
    item.id = product.id;
    item.name = product.name;
    item.price = product.price;
    item.qty = 1;

    this.cartService.addItem(item);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
