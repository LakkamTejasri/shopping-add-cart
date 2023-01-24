import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenjeansComponent } from './womenjeans.component';

describe('WomenjeansComponent', () => {
  let component: WomenjeansComponent;
  let fixture: ComponentFixture<WomenjeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenjeansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenjeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
