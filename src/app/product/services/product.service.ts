import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
     
   }

  getProducts(): Observable<Product[]> {
     return this.http
                .get<Product[]>(environment.apiEndPoint + '/api/products');
  }
}
