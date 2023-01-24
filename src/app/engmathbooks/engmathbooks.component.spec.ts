import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngmathbooksComponent } from './engmathbooks.component';

describe('EngmathbooksComponent', () => {
  let component: EngmathbooksComponent;
  let fixture: ComponentFixture<EngmathbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngmathbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngmathbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
