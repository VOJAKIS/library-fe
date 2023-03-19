import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingDetailPageComponent } from './borrowing-detail-page.component';

describe('BorrowingDetailPageComponent', () => {
  let component: BorrowingDetailPageComponent;
  let fixture: ComponentFixture<BorrowingDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowingDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
