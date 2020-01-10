import { CartService } from './../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  amount$: Observable<number>;
  constructor(private cartService: CartService) {
    this.amount$ = cartService.amount$;
   }

  ngOnInit() {
  }

}
