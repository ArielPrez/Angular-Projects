import { TestBed, inject } from '@angular/core/testing';

import { UsernameValidatorsService } from './username-validators.service';

describe('Username.ValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsernameValidatorsService]
    });
  });

  it('should be created', inject([UsernameValidatorsService], (service: UsernameValidatorsService) => {
    expect(service).toBeTruthy();
  }));
});
