import { TestBed } from '@angular/core/testing';

import { MessegesService } from './messeges.service';

describe('MessegesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessegesService = TestBed.get(MessegesService);
    expect(service).toBeTruthy();
  });
});
