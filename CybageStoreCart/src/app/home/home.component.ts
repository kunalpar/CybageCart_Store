import { Component, Output } from '@angular/core';
import { Product } from '../product/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @Output() $filteredProduct!:Observable<Product[]>;

  constructor(){
    
  }
   
}
