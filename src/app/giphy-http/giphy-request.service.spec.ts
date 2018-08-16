import { TestBed, inject } from '@angular/core/testing';

import { GiphyRequestService } from './giphy-request.service';

describe('GiphyRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphyRequestService]
    });
  });

  it('should be created', inject([GiphyRequestService], (service: GiphyRequestService) => {
    expect(service).toBeTruthy();
  }));
});
