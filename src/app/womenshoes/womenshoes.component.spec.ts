import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenshoesComponent } from './womenshoes.component';

describe('WomenshoesComponent', () => {
  let component: WomenshoesComponent;
  let fixture: ComponentFixture<WomenshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenshoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
