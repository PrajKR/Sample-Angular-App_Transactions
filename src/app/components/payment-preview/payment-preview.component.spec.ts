import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPreviewComponent } from './payment-preview.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
describe('PaymentPreviewComponent', () => {
  let component: PaymentPreviewComponent;
  let fixture: ComponentFixture<PaymentPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPreviewComponent ],
      providers: [{
        provide: MatDialog,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
