import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartComponent } from './components/cart/cart.component';

const config: Route[] = [
  {
    path: '',
    component: CartComponent
  } 
  
];

@NgModule({
  declarations: [
    CartListComponent,
    CartSummaryComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(config)
  ]
})
export class CartModule { }
