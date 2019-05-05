import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranqerHomeComponent } from './franqer-home.component';

describe('FranqerHomeComponent', () => {
  let component: FranqerHomeComponent;
  let fixture: ComponentFixture<FranqerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranqerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranqerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
