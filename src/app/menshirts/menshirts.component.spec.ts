import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshirtsComponent } from './menshirts.component';

describe('MenshirtsComponent', () => {
  let component: MenshirtsComponent;
  let fixture: ComponentFixture<MenshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenshirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
