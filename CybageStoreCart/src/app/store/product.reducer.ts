import { debug } from 'console';
import { Product } from './../product/product.model';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SHOW_PRODUCT = 'SHOW_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
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

    case FILTER_PRODUCT_CATEGORY:
         const bufferArr = [...state];
         return bufferArr.filter((val: { category: string; }) => val.category.includes(action.payload))
    
    
    default:
        return state;
    }
}