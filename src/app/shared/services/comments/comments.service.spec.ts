import { TestBed } from '@angular/core/testing';
import { ComponentsService } from './comments.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoryService', () => {
  let service: ComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
