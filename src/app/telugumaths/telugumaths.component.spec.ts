import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelugumathsComponent } from './telugumaths.component';

describe('TelugumathsComponent', () => {
  let component: TelugumathsComponent;
  let fixture: ComponentFixture<TelugumathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelugumathsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelugumathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
