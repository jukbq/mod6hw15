import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { GoodsPageComponent } from './goods-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('GoodsPageComponent', () => {
  let component: GoodsPageComponent;
  let fixture: ComponentFixture<GoodsPageComponent>;
  let activatedRoute: any; // Об'єкт-підробка для ActivatedRoute
  let formBuilder: any; // Об'єкт-підробка для FormBuilder

  beforeEach(async () => {
    activatedRoute = {
      data: of({
        /* ваші дані для ActivatedRoute */
      }),
    };

    formBuilder = jasmine.createSpyObj<FormBuilder>('FormBuilder', ['group']);

    await TestBed.configureTestingModule({
      declarations: [GoodsPageComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: FormBuilder, useValue: formBuilder },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
