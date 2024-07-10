import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.state';
import { Cart } from '../../../cart/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  $cart:Observable<Cart[]>;

  constructor(private store: Store<AppState>){
    this.$cart = this.store.select(state => state.cart);
  }
}
