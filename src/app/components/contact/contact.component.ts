import { Address } from './../../shared/models/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  headOffice: Address = { city: 'Chennai', 
                          state: 'TN', 
                          pincode: 12344};

  branchOffice: Address = {city: 'Bangalore', state: 'KA'}

  constructor() { }

  ngOnInit() {
  }

  // to be invoked/called by child component
  emailToAddress(address: Address) {
      console.log('emailing to ', address);
  }

}
