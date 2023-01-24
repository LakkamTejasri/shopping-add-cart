import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenshirtsComponent } from './womenshirts.component';

describe('WomenshirtsComponent', () => {
  let component: WomenshirtsComponent;
  let fixture: ComponentFixture<WomenshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenshirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
