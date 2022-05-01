import { TestBed } from '@angular/core/testing';

import { PhotoServicioService } from './photo-servicio.service';

describe('PhotoServicioService', () => {
  let service: PhotoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
