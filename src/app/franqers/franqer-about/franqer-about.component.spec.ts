import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranqerAboutComponent } from './franqer-about.component';

describe('FranqerAboutComponent', () => {
  let component: FranqerAboutComponent;
  let fixture: ComponentFixture<FranqerAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranqerAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranqerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
