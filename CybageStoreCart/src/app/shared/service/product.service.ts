import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../product/product.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,private store: Store<AppState>) { }

  getProduct() {
    return this.http.get<Product>('product.json').subscribe((data:Product)=>{
       this.store.dispatch({
        type: 'SHOW_PRODUCT',
        payload: data
       })
    })
  }
}
