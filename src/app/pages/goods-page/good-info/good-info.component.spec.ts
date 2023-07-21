import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { CoodInfoComponent } from './good-info.component';

describe('CoodInfoComponent', () => {
  let component: CoodInfoComponent;
  let fixture: ComponentFixture<CoodInfoComponent>;

  beforeEach(async () => {
    const activatedRoute = {
      paramMap: of(convertToParamMap({ id: '123' })),
      data: of({ goodInfo: {} }),
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CoodInfoComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(CoodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
