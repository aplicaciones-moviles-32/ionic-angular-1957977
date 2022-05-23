import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepubComponent } from './detallepub.component';

describe('DetallepubComponent', () => {
  let component: DetallepubComponent;
  let fixture: ComponentFixture<DetallepubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallepubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
