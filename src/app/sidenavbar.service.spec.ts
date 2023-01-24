import { TestBed } from '@angular/core/testing';

import { SidenavbarService } from './sidenavbar.service';

describe('SidenavbarService', () => {
  let service: SidenavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
