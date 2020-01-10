import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

  providers: [
    // only if we need to dedicated service 
    // instance per component, 
    // service shall be destroyed when the component destroyed
    // CartService
  ]
})
export class CartComponent implements OnInit {

  // dependency injection
  // when angular creates cartcomponent
  // it automatically create CartService instance
  // and inject into cart component 
  constructor(private cartService: CartService) {
    console.log('Cartcomponent created');
   }

  ngOnInit() {
  }

  addNewItem() {
    const item: CartItem = new CartItem();
    item.id = Math.ceil(Math.random() * 10000);
    item.name = 'PRoduct ' + item.id;
    item.price = Math.ceil(Math.random() * 100);
    item.qty = 1;

    this.cartService.addItem(item);

  }

  reset() {
    this.cartService.empty();
  }

}
