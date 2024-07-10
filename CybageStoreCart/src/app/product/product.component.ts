import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  $products: Observable<Product[]>;
  
  constructor(private store: Store<AppState>,private productService: ProductService) {
    this.productService.getProduct();
    this.$products = this.store.select(state => state.product);   
   }

  ngOnInit() {
  }

  handleCartChange($event: any){
    this.$products = $event
}
}
