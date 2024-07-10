import { Cart } from '../cart/cart.model';
import { Product } from './../product/product.model';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SHOW_PRODUCT = 'SHOW_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const FILTER_PRODUCT_CATEGORY = 'FILTER_PRODUCT_CATEGORY';


export function addProductReducer(state: Product[] = [], action :any) {
  switch (action.type) {
    case ADD_PRODUCT:
        return [...state, action.payload];

    case UPDATE_PRODUCT:
            return state.map(data => {
              if (data.id === action.payload.id) {
                    return {...data, cartcount: action.payload.cartcount };
              }
              return data;
            });

    case SHOW_PRODUCT:
    return action.payload; 

    // case FILTER_PRODUCT_CATEGORY:
    //     return  console.log('state->',state)
             
    //      console.log('filter',state.filter((val: { category: string; }) => val.category === action.payload))
    
    
    default:
        return state;
    }
}

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