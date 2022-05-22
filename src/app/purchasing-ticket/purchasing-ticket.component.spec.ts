import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingTicketComponent } from './purchasing-ticket.component';

describe('PurchasingTicketComponent', () => {
  let component: PurchasingTicketComponent;
  let fixture: ComponentFixture<PurchasingTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasingTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
