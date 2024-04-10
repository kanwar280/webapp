import { TestBed } from '@angular/core/testing';

import { HttphandlerserviceService } from './httphandlerservice.service';

describe('HttphandlerserviceService', () => {
  let service: HttphandlerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttphandlerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
