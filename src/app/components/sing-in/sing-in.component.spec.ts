import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { map} from 'rxjs/operators';
import { AngularFireAuth } from'@angular/fire/auth';

import { SingInComponent } from './sing-in.component';

describe('SingInComponent', () => {
  let component: SingInComponent;
  let fixture: ComponentFixture<SingInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
