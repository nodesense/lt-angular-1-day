import { Component, 
        OnInit,
        Input,

        Output,
        EventEmitter
      } from '@angular/core';
import { Address } from '../../models/address';
 
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  // property binding [address]
  // receive input from parent component
  @Input()
  address: Address;

  // event binding (emailEvent)

  // publisher an event from child component
  // parent should susbcribe to the event using event binding (emailEvent)
  @Output()
  emailEvent: EventEmitter<Address> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  email() {
      // publish an event
      console.log('publishing...')
      // the address is accssible as $event in html
      this.emailEvent.emit(this.address)
  }

}
