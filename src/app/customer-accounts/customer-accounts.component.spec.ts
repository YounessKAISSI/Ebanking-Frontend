import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerAccountsComponent } from './customer-accounts.component';

describe('CutomerAccountsComponent', () => {
  let component: CutomerAccountsComponent;
  let fixture: ComponentFixture<CutomerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CutomerAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
