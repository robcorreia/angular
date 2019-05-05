import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranqerProductsComponent } from './franqer-products.component';

describe('ProductListComponent', () => {
  let component: FranqerProductsComponent;
  let fixture: ComponentFixture<FranqerProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranqerProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranqerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
