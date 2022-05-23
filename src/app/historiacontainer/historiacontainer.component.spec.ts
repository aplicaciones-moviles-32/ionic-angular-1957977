import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriacontainerComponent } from './historiacontainer.component';

describe('HistoriacontainerComponent', () => {
  let component: HistoriacontainerComponent;
  let fixture: ComponentFixture<HistoriacontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriacontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriacontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
