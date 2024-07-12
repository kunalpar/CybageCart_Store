import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../product/product.model';
import { ProductService } from '../../service/product.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Cart } from '../../../cart/cart.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() products!:Product; 

  @Output()
  addedtocart = new EventEmitter();

  constructor(private store: Store<AppState>){
  }

    addProduct(item:Product) {
    
    this.store.dispatch({
      type: 'UPDATE_PRODUCT',
      payload: <Product> {
        cartcount:item.cartcount + 1,
        id:item.id,
        category:item.category,
        title:item.title,
        price:item.price,
        description:item.description,
        image:item.image,
        isSelected:item.isSelected,
        rating:item.rating
      }
    });

    this.store.dispatch({
      type: 'ADD_CART',
      payload: <Cart> {
        cartcount:item.cartcount + 1,
        id:item.id,
        category:item.category,
        title:item.title,
        price:item.price
      }
    });
  }

  removeProduct(item:Product){
    this.store.dispatch({
      type: 'UPDATE_PRODUCT',
      payload: <Product> {
        cartcount:item.cartcount - 1,
        id:item.id,
        category:item.category,
        title:item.title,
        price:item.price,
        description:item.description,
        image:item.image,
        isSelected:item.isSelected,
        rating:item.rating
      }
    });

    
    this.store.dispatch({
      type: 'REMOVE_CART',
      payload: <Cart> {
        cartcount:item.cartcount - 1,
        id:item.id,
        category:item.category,
        title:item.title,
        price:item.price
      }
    });
  }
   
  roundNumber(item:any):number{
    return Math.round(item)
  }
}
