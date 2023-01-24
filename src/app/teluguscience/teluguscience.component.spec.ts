import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeluguscienceComponent } from './teluguscience.component';

describe('TeluguscienceComponent', () => {
  let component: TeluguscienceComponent;
  let fixture: ComponentFixture<TeluguscienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeluguscienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeluguscienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
