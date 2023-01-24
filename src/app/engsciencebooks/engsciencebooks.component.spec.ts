import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngsciencebooksComponent } from './engsciencebooks.component';

describe('EngsciencebooksComponent', () => {
  let component: EngsciencebooksComponent;
  let fixture: ComponentFixture<EngsciencebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngsciencebooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngsciencebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
