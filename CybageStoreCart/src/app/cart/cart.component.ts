import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  $carts:Observable<Cart[]>;

  constructor(private store: Store<AppState>){
    this.$carts = this.store.select(state => state.cart);
  }

  removeProduct(item:Cart){
      
  }

}
