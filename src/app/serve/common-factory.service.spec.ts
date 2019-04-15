import { TestBed } from '@angular/core/testing';

import { CommonFactoryService } from './common-factory.service';

describe('CommonFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonFactoryService = TestBed.get(CommonFactoryService);
    expect(service).toBeTruthy();
  });
});
