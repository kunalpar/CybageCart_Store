import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CartComponent } from './cart.component';
import { StoreModule } from '@ngrx/store';


describe('fCartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(provideMockStore),
      ],
      declarations: [CartComponent]
    })
    .compileComponents();
     
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return list of product', () => {
    component.ngOnInit();
    component.$carts.subscribe(data=>{
      expect(data.length).toHaveLength(0)
    })    
  });

});
