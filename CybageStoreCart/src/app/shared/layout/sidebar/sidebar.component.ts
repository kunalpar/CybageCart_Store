import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Observable } from 'rxjs';
import { Product } from '../../../product/product.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  $products:Observable<Product[]>;
  category:string[] = [];

  constructor(private store: Store<AppState>){
    this.$products = this.store.select(state => state.product);
    this.buildCategory();
  }

  buildCategory(){
    this.$products.subscribe((data:Product[])=>{
       data.map(element=>{
        if(!this.category.includes(element.category)){
          this.category.push(element.category);
        }
       })
    })
  }

  filter(item:string){
      
  }

}
