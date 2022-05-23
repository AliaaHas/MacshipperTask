import { TestBed } from '@angular/core/testing';

import { CustomvalidatioService } from './customvalidatio.service';

describe('CustomvalidatioService', () => {
  let service: CustomvalidatioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomvalidatioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
