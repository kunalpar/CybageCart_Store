import { Cart } from '../cart/cart.model';


export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';


export function addCartReducer(state: Cart[] = [], action :any){
    switch (action.type) {
        case ADD_CART:
            return [...state, action.payload];
            
        case REMOVE_CART:
        return state.filter(product => product.id !== action.payload.id);
        default:
            return state;
        }
}