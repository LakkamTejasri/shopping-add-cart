import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenjeansComponent } from './menjeans.component';

describe('MenjeansComponent', () => {
  let component: MenjeansComponent;
  let fixture: ComponentFixture<MenjeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenjeansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenjeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
