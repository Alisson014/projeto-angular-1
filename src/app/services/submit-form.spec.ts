import { TestBed } from '@angular/core/testing';

import { SubmitFormService } from './submit-form';

describe('SubmitForm', () => {
  let service: SubmitFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
