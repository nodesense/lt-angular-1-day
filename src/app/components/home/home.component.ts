import { Address } from './../../shared/models/address';
import { Component, 
        OnInit,
        OnDestroy
      } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // type inference, compiler assum counter as number
  counter = 1; 
  title = "Home";
  price = 34.5677676;
  qty = 23;

  today = new Date();

  timerHandle: any;

  address: Address = undefined;

  constructor() {
    console.log('Home compoent created');
   }

  // called automatically after the view is initialized in browser

  ngOnInit() {
    console.log('Home compoent initialized');
     this.timerHandle = setInterval (() => {
        this.counter++;
        console.log('counter increment called via timer',  this.counter);

    }, 5000);
  }


  // called before destroying the component
  ngOnDestroy() {
    console.log('Home component ngOnDestroy');
    clearInterval(this.timerHandle); // stop the timer
  }


  increment() {
    this.counter++;
  }


  incrementBy(n : number) {
    this.counter += n;
  }

  // $event
  decrement(event: Event) {
    this.counter--;
    console.log('event is ', event);
  }


}
