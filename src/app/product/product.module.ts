import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Route, RouterModule } from '@angular/router';

const config: Route[] = [
  {
    path:'',
    component: ProductListComponent
  }
]


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(config)
  ]
})
export class ProductModule { }
