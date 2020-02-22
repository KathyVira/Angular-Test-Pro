import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMessegesComponent } from './customer-messeges.component';

describe('CustomerMessegesComponent', () => {
  let component: CustomerMessegesComponent;
  let fixture: ComponentFixture<CustomerMessegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMessegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMessegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
