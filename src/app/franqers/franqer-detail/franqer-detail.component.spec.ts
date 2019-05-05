import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranqerDetailComponent } from './franqer-detail.component';

describe('FranqerComponent', () => {
  let component: FranqerDetailComponent;
  let fixture: ComponentFixture<FranqerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranqerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranqerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
