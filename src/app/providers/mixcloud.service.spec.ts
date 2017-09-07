import { TestBed, inject } from '@angular/core/testing';

import { MixcloudService } from './mixcloud.service';

describe('MixcloudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MixcloudService]
    });
  });

  it('should be created', inject([MixcloudService], (service: MixcloudService) => {
    expect(service).toBeTruthy();
  }));
});
