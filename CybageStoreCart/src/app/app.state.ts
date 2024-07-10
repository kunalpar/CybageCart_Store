import { Cart } from './cart/cart.model';
import { Product } from './product/product.model';
export interface AppState {
  readonly product: Product[];
  readonly cart: Cart[];
}