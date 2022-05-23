import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopovermenuComponent } from './popovermenu.component';

describe('PopovermenuComponent', () => {
  let component: PopovermenuComponent;
  let fixture: ComponentFixture<PopovermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopovermenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopovermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
