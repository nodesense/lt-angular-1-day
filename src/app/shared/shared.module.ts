import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [
    // by default, they are private to this module
    AddressComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    // expose the component, directive, pipes to outside module
    AddressComponent
  ]
})
export class SharedModule { }
