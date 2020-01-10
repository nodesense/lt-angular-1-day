import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = []; 

  private _amount: number = 0;

  amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount);

  set amount(value: number) {
    this._amount = value;
    // publish the value changes
    this.amount$.next(this._amount)
  }

  get amount(): number {
    return this._amount;
  }

  constructor() { 
    console.log('CartService Created');
  }

  calculate() {
    let a = 0;
    for (let item of this.items) {
      a += item.qty * item.price;
    }

    this.amount = a; // calls setter

  }


  addItem(item: CartItem) {
    this.items.push(item);
    this.calculate();
  }

  removeItem(id: number) {
    const index = this.items.findIndex( item => item.id === id);
    this.items.splice(index, 1);
    this.calculate();
  }

  empty() {
    this.items.splice(0, this.items.length);
    this.calculate();
  }

}
