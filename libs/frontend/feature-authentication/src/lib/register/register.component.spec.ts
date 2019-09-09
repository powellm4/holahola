import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiBootstrapModule } from '@ngx-ui/bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('RegisterUiComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxUiBootstrapModule,
        NgbAlertModule
      ],
      declarations: [RegisterComponent],
      providers: [provideMockStore()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
