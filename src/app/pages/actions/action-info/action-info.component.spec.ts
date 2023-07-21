import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ActionInfoComponent } from './action-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActionInfoComponent', () => {
  let component: ActionInfoComponent;
  let fixture: ComponentFixture<ActionInfoComponent>;
  let activatedRoute: any;

  beforeEach(async () => {
    activatedRoute = {
      paramMap: of(convertToParamMap({ id: '123' })),
      data: of({ actionInfo: {} }),
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ActionInfoComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
