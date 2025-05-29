import { TestBed } from '@angular/core/testing';

import { FruitlisdataService } from './fruitlisdata.service';

describe('FruitlisdataService', () => {
  let service: FruitlisdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitlisdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
