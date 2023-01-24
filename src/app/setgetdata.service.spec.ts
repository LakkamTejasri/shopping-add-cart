import { TestBed } from '@angular/core/testing';

import { SetgetdataService } from './setgetdata.service';

describe('SetgetdataService', () => {
  let service: SetgetdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetgetdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
